import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const FolderIcon = (props: IconProps) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.34999 9.675L1.24999 7.5C1.24999 6.17392 1.77677 4.90215 2.71445 3.96447C3.65214 3.02678 4.9239 2.5 6.24999 2.5H15.43C16.756 2.50028 18.0275 3.02725 18.965 3.965L21.035 6.035C21.9725 6.97275 23.244 7.49972 24.57 7.5H34.525C35.2198 7.49993 35.907 7.64466 36.5427 7.92498C37.1785 8.20529 37.7488 8.61503 38.2174 9.12805C38.686 9.64108 39.0425 10.2461 39.2641 10.9046C39.4858 11.5631 39.5679 12.2606 39.505 12.9525L37.9125 30.4525C37.7996 31.6948 37.2264 32.85 36.3055 33.6914C35.3846 34.5328 34.1824 34.9995 32.935 35H7.06499C5.81758 34.9995 4.61541 34.5328 3.69448 33.6914C2.77355 32.85 2.20038 31.6948 2.08749 30.4525L0.494987 12.9525C0.388453 11.7945 0.690972 10.6357 1.34999 9.6775V9.675ZM5.47499 10C5.1277 9.99998 4.78422 10.0723 4.46644 10.2124C4.14866 10.3525 3.86355 10.5572 3.62929 10.8136C3.39502 11.07 3.21674 11.3723 3.10581 11.7014C2.99488 12.0305 2.95373 12.3791 2.98499 12.725L4.57749 30.225C4.63362 30.8462 4.9199 31.4239 5.38013 31.8448C5.84036 32.2657 6.4413 32.4994 7.06499 32.5H32.935C33.5587 32.4994 34.1596 32.2657 34.6198 31.8448C35.0801 31.4239 35.3664 30.8462 35.4225 30.225L37.015 12.725C37.0462 12.3791 37.0051 12.0305 36.8942 11.7014C36.7832 11.3723 36.605 11.07 36.3707 10.8136C36.1364 10.5572 35.8513 10.3525 35.5335 10.2124C35.2158 10.0723 34.8723 9.99998 34.525 10H5.47499ZM17.2 5.7325C16.9676 5.50004 16.6916 5.31569 16.3879 5.19C16.0842 5.06431 15.7587 4.99974 15.43 5H6.24999C5.59509 4.99988 4.9663 5.25674 4.4988 5.71536C4.03131 6.17398 3.76243 6.79773 3.74999 7.4525L3.76499 7.8C4.29999 7.605 4.87499 7.5 5.47499 7.5H18.965L17.1975 5.7325H17.2Z"
      fill="url(#paint0_linear_24_381)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_24_381"
        x1="1.9716"
        y1="2.50001"
        x2="37.0638"
        y2="27.8732"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
    </defs>
  </svg>
);

export const LinkIcon = (props: IconProps) => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.06622 8.26834L1.58756 10.747C0.571062 11.7635 0 13.1422 0 14.5797C0 16.0173 0.571062 17.3959 1.58756 18.4124C2.60406 19.4289 3.98272 20 5.42027 20C6.85781 20 8.23648 19.4289 9.25297 18.4124L12.5554 15.1081C13.1684 14.4951 13.6254 13.7439 13.888 12.9177C14.1506 12.0915 14.2111 11.2144 14.0646 10.3599C13.9181 9.50545 13.5687 8.69861 13.0458 8.00712C12.5229 7.31562 11.8418 6.75965 11.0596 6.38586L10.0009 7.44453C9.89343 7.5522 9.79995 7.67299 9.72269 7.80405C10.327 7.97779 10.8756 8.30625 11.3141 8.75695C11.7526 9.20766 12.0659 9.76501 12.223 10.3739C12.3801 10.9828 12.3756 11.6222 12.2099 12.2288C12.0442 12.8354 11.723 13.3882 11.2782 13.8327L7.97751 17.1351C7.29953 17.8131 6.37998 18.194 5.42117 18.194C4.46236 18.194 3.54281 17.8131 2.86483 17.1351C2.18684 16.4572 1.80596 15.5376 1.80596 14.5788C1.80596 13.62 2.18684 12.7004 2.86483 12.0225L4.29746 10.5916C4.09533 9.83418 4.01724 9.04897 4.06622 8.26654V8.26834Z"
      fill="url(#paint0_linear_24_386)"
    />
    <path
      d="M7.44638 4.89003C6.8334 5.50309 6.37644 6.25424 6.11384 7.08045C5.85124 7.90665 5.79067 8.7838 5.93721 9.63826C6.08375 10.4927 6.43312 11.2996 6.95601 11.9911C7.47889 12.6825 8.16003 13.2385 8.94224 13.6123L10.3424 12.2104C9.72983 12.0461 9.17133 11.7235 8.72298 11.2749C8.27464 10.8264 7.95225 10.2678 7.7882 9.65516C7.62416 9.04256 7.62424 8.39757 7.78845 7.78501C7.95265 7.17246 8.27518 6.6139 8.72364 6.16549L12.0243 2.86302C12.7023 2.18504 13.6218 1.80415 14.5806 1.80415C15.5395 1.80415 16.459 2.18504 17.137 2.86302C17.815 3.541 18.1959 4.46055 18.1959 5.41936C18.1959 6.37818 17.815 7.29772 17.137 7.97571L15.7044 9.40654C15.9067 10.1653 15.9844 10.9512 15.9356 11.7316L18.4143 9.25297C19.4308 8.23648 20.0018 6.85781 20.0018 5.42027C20.0018 3.98272 19.4308 2.60406 18.4143 1.58756C17.3978 0.571062 16.0191 0 14.5816 0C13.144 0 11.7653 0.571062 10.7488 1.58756L7.44638 4.89003Z"
      fill="url(#paint1_linear_24_386)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_24_386"
        x1="0.542339"
        y1="6.38587"
        x2="14.4577"
        y2="15.0844"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_24_386"
        x1="6.40156"
        y1="4.54936e-06"
        x2="20.3159"
        y2="8.69902"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
    </defs>
  </svg>
);

export const GithubIcon = (props: IconProps) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_108_2)">
      <path
        d="M14.6667 20.1667V16.6192C14.701 16.1821 14.642 15.7426 14.4934 15.3301C14.3449 14.9176 14.1102 14.5415 13.805 14.2267C16.6833 13.9058 19.7083 12.815 19.7083 7.80998C19.7081 6.53016 19.2158 5.29942 18.3333 4.37248C18.7512 3.25278 18.7217 2.01514 18.2508 0.91665C18.2508 0.91665 17.1692 0.595817 14.6667 2.27332C12.5657 1.7039 10.351 1.7039 8.25 2.27332C5.74749 0.595817 4.66583 0.91665 4.66583 0.91665C4.19501 2.01514 4.16546 3.25278 4.58333 4.37248C3.69428 5.30629 3.20147 6.54816 3.20833 7.83748C3.20833 12.8058 6.23333 13.8967 9.11166 14.2542C8.81008 14.5658 8.57749 14.9374 8.42903 15.3449C8.28057 15.7524 8.21957 16.1865 8.25 16.6192V20.1667M8.25 17.4167C3.66666 18.7917 3.66666 15.125 1.83333 14.6667L8.25 17.4167Z"
        stroke="url(#paint0_linear_108_2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_108_2"
        x1="2.5188"
        y1="0.892096"
        x2="21.1705"
        y2="11.3007"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FC466B" />
        <stop offset="1" stopColor="#3F5EFB" />
      </linearGradient>
      <clipPath id="clip0_108_2">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);