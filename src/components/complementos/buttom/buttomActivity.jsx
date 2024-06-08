import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const ButtonActivity = () => {
  return (
    <>
      <div className="szh-menu-button">
        <Menu
          menuButton={
            <MenuButton>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  rx="3.5"
                  stroke="#999999"
                />
                <path
                  d="M6.67462 8H13.3254C13.4604 8.00211 13.5917 8.03736 13.7029 8.10137C13.8141 8.16538 13.9002 8.2553 13.9505 8.35991C14.0008 8.46451 14.0131 8.57917 13.9858 8.68956C13.9585 8.79995 13.8928 8.90118 13.797 8.98062L10.4716 11.8358C10.4099 11.8878 10.3365 11.9291 10.2555 11.9573C10.1746 11.9855 10.0877 12 10 12C9.91228 12 9.82543 11.9855 9.74447 11.9573C9.66352 11.9291 9.59007 11.8878 9.52837 11.8358L6.20299 8.98062C6.10716 8.90118 6.04149 8.79995 6.01419 8.68956C5.98689 8.57917 5.99916 8.46451 6.04947 8.35991C6.09978 8.2553 6.1859 8.16538 6.29708 8.10137C6.40826 8.03736 6.53957 8.00211 6.67462 8Z"
                  fill="#4B4B4B"
                />
              </svg>
            </MenuButton>
          }
          transition
        >
          <MenuItem>New File</MenuItem>
          <MenuItem>Save</MenuItem>
          <SubMenu label="Edit">
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </SubMenu>
          <MenuItem>Print...</MenuItem>
        </Menu>
      </div>
    </>
  );
};
