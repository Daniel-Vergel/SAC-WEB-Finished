import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

export const ButtonReport = () => {
  return (
    <>
      <div className="szh-menu-button">
        <Menu
          menuButton={
            <MenuButton>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#E6F3FA" />
                <path
                  d="M8.5 18.5C7.8125 18.5 7.22396 18.2552 6.73438 17.7656C6.24479 17.276 6 16.6875 6 16C6 15.3125 6.24479 14.724 6.73438 14.2344C7.22396 13.7448 7.8125 13.5 8.5 13.5C9.1875 13.5 9.77604 13.7448 10.2656 14.2344C10.7552 14.724 11 15.3125 11 16C11 16.6875 10.7552 17.276 10.2656 17.7656C9.77604 18.2552 9.1875 18.5 8.5 18.5ZM16 18.5C15.3125 18.5 14.724 18.2552 14.2344 17.7656C13.7448 17.276 13.5 16.6875 13.5 16C13.5 15.3125 13.7448 14.724 14.2344 14.2344C14.724 13.7448 15.3125 13.5 16 13.5C16.6875 13.5 17.276 13.7448 17.7656 14.2344C18.2552 14.724 18.5 15.3125 18.5 16C18.5 16.6875 18.2552 17.276 17.7656 17.7656C17.276 18.2552 16.6875 18.5 16 18.5ZM23.5 18.5C22.8125 18.5 22.224 18.2552 21.7344 17.7656C21.2448 17.276 21 16.6875 21 16C21 15.3125 21.2448 14.724 21.7344 14.2344C22.224 13.7448 22.8125 13.5 23.5 13.5C24.1875 13.5 24.776 13.7448 25.2656 14.2344C25.7552 14.724 26 15.3125 26 16C26 16.6875 25.7552 17.276 25.2656 17.7656C24.776 18.2552 24.1875 18.5 23.5 18.5Z"
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
