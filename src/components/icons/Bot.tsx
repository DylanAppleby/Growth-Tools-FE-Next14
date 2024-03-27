import React, { SVGProps } from "react";

export const Bot = ({ fill = "black" }: SVGProps<any>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9883 1.98926C11.7895 1.99236 11.6002 2.07423 11.4617 2.21686C11.3233 2.3595 11.2471 2.55125 11.25 2.75V3.5H7.75C6.51625 3.5 5.5 4.51625 5.5 5.75V10.25C5.5 11.4838 6.51625 12.5 7.75 12.5H16.25C17.4838 12.5 18.5 11.4838 18.5 10.25V5.75C18.5 4.51625 17.4838 3.5 16.25 3.5H12.75V2.75C12.7514 2.64962 12.7327 2.54997 12.6949 2.45695C12.6571 2.36394 12.6011 2.27946 12.53 2.20852C12.459 2.13757 12.3745 2.08161 12.2814 2.04395C12.1883 2.00629 12.0887 1.98769 11.9883 1.98926ZM7.75 5H16.25C16.6732 5 17 5.32675 17 5.75V10.25C17 10.6732 16.6732 11 16.25 11H7.75C7.32675 11 7 10.6732 7 10.25V5.75C7 5.32675 7.32675 5 7.75 5ZM9.75 6.5C9.41848 6.5 9.10054 6.6317 8.86612 6.86612C8.6317 7.10054 8.5 7.41848 8.5 7.75C8.5 8.08152 8.6317 8.39946 8.86612 8.63388C9.10054 8.8683 9.41848 9 9.75 9C10.0815 9 10.3995 8.8683 10.6339 8.63388C10.8683 8.39946 11 8.08152 11 7.75C11 7.41848 10.8683 7.10054 10.6339 6.86612C10.3995 6.6317 10.0815 6.5 9.75 6.5ZM14.25 6.5C13.9185 6.5 13.6005 6.6317 13.3661 6.86612C13.1317 7.10054 13 7.41848 13 7.75C13 8.08152 13.1317 8.39946 13.3661 8.63388C13.6005 8.8683 13.9185 9 14.25 9C14.5815 9 14.8995 8.8683 15.1339 8.63388C15.3683 8.39946 15.5 8.08152 15.5 7.75C15.5 7.41848 15.3683 7.10054 15.1339 6.86612C14.8995 6.6317 14.5815 6.5 14.25 6.5ZM6.25 14C5.01625 14 4 15.0162 4 16.25V16.6318C4 17.8044 4.48109 18.9308 5.34375 19.7344C5.34375 19.7347 5.34375 19.735 5.34375 19.7354C6.50574 20.8172 8.60856 22 12 22C15.3914 22 17.4942 20.8169 18.6562 19.7344C19.5188 18.9309 20 17.8038 20 16.6309V16.25C20 15.0162 18.9838 14 17.75 14H6.25ZM6.25 15.5H17.75C18.1732 15.5 18.5 15.8268 18.5 16.25V16.6309C18.5 17.3949 18.1892 18.1202 17.6348 18.6367C16.7218 19.4872 15.0506 20.5 12 20.5C8.94944 20.5 7.27824 19.4868 6.36523 18.6367C5.81127 18.1204 5.5 17.395 5.5 16.6318V16.25C5.5 15.8268 5.82675 15.5 6.25 15.5Z"
        fill={fill}
      />
    </svg>
  );
};
