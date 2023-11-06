const MenuFragment = ` 
    menus {
        nodes {
            name
            locations
            id
            slug
            menuItems(first: 100) {
                nodes {
                    label
                    uri
                    id
                    parentId
                }
            }
        }
    }
    `;

export default MenuFragment;
