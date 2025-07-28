// src/components/Menu/HamburgerMenu/MenuItem.jsx
import React, { useState } from "react";
import {
  getMenuId,
  getMenuLink,
  getChildItems,
  hasMenuChildren,
  isActive,
} from "@/utils/menuUtils.js";
import Button from "@/components/Button/Button.jsx";
import ClientItemsTemplate from "@/components/ItemsTemplates/ClientItemsTemplate.jsx";

export default function MobileMenuItem({
  item,
  allItems = [],
  itemClass = "",
  linkClass = "",
  hierarchical = true,
  submenu = null,
  collectionName,
  HasPage,
  onItemClick,
}) {
  const [open, setOpen] = useState(false);

  const thisId   = getMenuId(item);
  const children = getChildItems(thisId, allItems);
  const hasKids  = hasMenuChildren(item, allItems, hierarchical);
  const link     = getMenuLink(item, collectionName);

  // only in browser
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
  const active      = isActive(currentPath, link);

  return (
    <div className={`menu-item ${itemClass}`}>
      <div className={`flex w-full items-center justify-between`}>
        <Button
          as="a"
          variant="link"
          href={link}
          className={`flex-1 text-left ${linkClass} ${active ? "text-[var(--color-secondary)]" : ""}`}
          onClick={onItemClick}
          aria-current={active ? "page" : undefined}
        >
          {item.data.title}
        </Button>

        {hasKids && (
          <Button
            as="button"
            variant="link"
            tabIndex={0}
            onClick={() => setOpen((prev) => !prev)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen((p) => !p);
              }
            }}
            className="ml-2 p-1"
            aria-haspopup="true"
            aria-expanded={open}
          >
            <span className="submenu-arrow" aria-hidden="true">
              ▼
            </span>
          </Button>
        )}
      </div>

      {hasKids && open && (
        <div className="ml-4 border-l border-gray-200">
          <ClientItemsTemplate
            items={children}
            collectionName={collectionName}
            HasPage={HasPage}
            itemsClass="flex flex-col space-y-2"
            itemClass=""
            role="menu"
            ItemComponent={{
              component: MobileMenuItem,
              props: {
                allItems,
                itemClass: submenu.subMenuItem.props.itemClass,
                linkClass: submenu.subMenuItem.props.linkClass,
                hierarchical: submenu.subMenuItem.props.hierarchical,
                submenu,
                collectionName,
                HasPage,
                onItemClick,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}
