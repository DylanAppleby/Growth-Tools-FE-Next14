import React, { SVGProps } from "react";

export const UploadIcon = ({ fill = "black" }: SVGProps<any>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.91699C6.87917 2.91699 4.3042 5.29616 3.9917 8.33366H3.75C1.68333 8.33366 0 10.017 0 12.0837C0 14.1503 1.68333 15.8337 3.75 15.8337H8.23324C8.1624 15.6378 8.125 15.4295 8.125 15.2087V14.5837H3.75C2.37083 14.5837 1.25 13.4628 1.25 12.0837C1.25 10.7045 2.37083 9.58366 3.75 9.58366H4.58333C4.92917 9.58366 5.20833 9.30449 5.20833 8.95866C5.20833 6.31699 7.35833 4.16699 10 4.16699C12.6417 4.16699 14.7917 6.31699 14.7917 8.95866C14.7917 9.30449 15.0708 9.58366 15.4167 9.58366H16.25C17.6292 9.58366 18.75 10.7045 18.75 12.0837C18.75 13.4628 17.6292 14.5837 16.25 14.5837H11.875V15.2087C11.875 15.4295 11.8376 15.6378 11.7668 15.8337H16.25C18.3167 15.8337 20 14.1503 20 12.0837C20 10.017 18.3167 8.33366 16.25 8.33366H16.0083C15.6958 5.29616 13.1208 2.91699 10 2.91699ZM9.96908 7.50114C9.82157 7.50854 9.68146 7.56793 9.57357 7.66878L6.44857 10.5854C6.38545 10.6406 6.33407 10.7079 6.29749 10.7833C6.26091 10.8587 6.23988 10.9408 6.23564 11.0245C6.2314 11.1082 6.24404 11.1919 6.27281 11.2706C6.30158 11.3494 6.34589 11.4215 6.40311 11.4828C6.46032 11.544 6.52928 11.5931 6.60587 11.6272C6.68246 11.6613 6.76512 11.6796 6.84893 11.6811C6.93274 11.6825 7.01599 11.6671 7.09373 11.6358C7.17146 11.6044 7.2421 11.5577 7.30143 11.4985L9.375 9.56413V15.2087C9.37383 15.2915 9.38913 15.3737 9.42001 15.4506C9.4509 15.5274 9.49675 15.5974 9.5549 15.6563C9.61305 15.7153 9.68235 15.7622 9.75876 15.7941C9.83517 15.8261 9.91717 15.8426 10 15.8426C10.0828 15.8426 10.1648 15.8261 10.2412 15.7941C10.3177 15.7622 10.3869 15.7153 10.4451 15.6563C10.5033 15.5974 10.5491 15.5274 10.58 15.4506C10.6109 15.3737 10.6262 15.2915 10.625 15.2087V9.56413L12.6986 11.4985C12.7579 11.5577 12.8285 11.6044 12.9063 11.6358C12.984 11.6671 13.0673 11.6825 13.1511 11.6811C13.2349 11.6796 13.3175 11.6613 13.3941 11.6272C13.4707 11.5931 13.5397 11.544 13.5969 11.4828C13.6541 11.4215 13.6984 11.3494 13.7272 11.2706C13.756 11.1919 13.7686 11.1082 13.7644 11.0245C13.7601 10.9408 13.7391 10.8587 13.7025 10.7833C13.6659 10.7079 13.6145 10.6406 13.5514 10.5854L10.4264 7.66878C10.3653 7.61165 10.2933 7.56737 10.2148 7.53857C10.1362 7.50978 10.0526 7.49705 9.96908 7.50114Z"
        fill={fill}
      />
    </svg>
  );
};
