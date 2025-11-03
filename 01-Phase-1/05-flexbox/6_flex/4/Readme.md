Result
The flex container contains two flex items:

The #flex-auto item has a flex value of auto. The auto value expands to 1 1 auto, i.e., the item is allowed to expand.
The #default item has no flex value set so it defaults to the initial value. The initial value expands to 0 1 auto, i.e., the item is not allowed to expand.
The #default item takes up as much space as its width requires, but does not expand to take up any more space. All the remaining space is taken up by the #flex-auto item.

When you click the #flex-auto item, we set the #default item's display property to none, removing it from the layout. The #flex-auto item then expands to occupy all the available space in the container. Clicking the #flex-auto item again adds the #default item back to the container.
