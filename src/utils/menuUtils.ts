// src/utils/menuUtils.ts
import { normalizeRef } from "@/utils/ContentUtils";
import { getItemKey } from "@/utils/getItemKey.js";

/**
 * Given a parentId string (which may be either "foo" or "collection/foo")
 * and a flat array of items (Astro entries or loader‐items),
 * return only those whose `data.parent` matches that parent.
 */
export function getChildItems(parentId, allItems = []) {
  const normParent = normalizeRef(parentId);

  return allItems.filter((item) => {
    const p = item.data.parent;
    if (!p) return false;
    // if it’s an object‐style parent: { id, collection }
    if (typeof p === "object" && p.id) {
      return normalizeRef(p.id) === normParent;
    }
    // else plain string parent (just a slug)
    return normalizeRef(p) === normParent;
  });
}

/**
 * Stable ID for any item: slug || id
 */
export function getMenuId(item) {
  return getItemKey(item);
}

/**
 * URL to link‐to: either explicit data.link or /collection/ID
 */
export function getMenuLink(item, collectionName) {
  return item.data?.link ?? `/${collectionName}/${getMenuId(item)}`;
}

/**
 * Top‐level = no data.parent
 */
export function getRootItems(items) {
  return items.filter((i) => !i.data?.parent);
}

/**
 * “Do we have kids?” helper
 */
export function hasMenuChildren(item, allItems, hierarchical) {
  return hierarchical && getChildItems(getMenuId(item), allItems).length > 0;
}

export function isActive(currentPath, linkPath) {
  return currentPath === linkPath;
}