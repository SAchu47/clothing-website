import React, { FC, ReactElement } from 'react';

export const LikeIcon: FC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
      <g clipPath="url(#clip0_3017_11395)">
        <path d="M8.00087 2.74805L7.28387 2.01105C5.60087 0.281049 2.51487 0.878049 1.40087 3.05305C0.877872 4.07605 0.759872 5.55305 1.71487 7.43805C2.63487 9.25305 4.54887 11.427 8.00087 13.795C11.4529 11.427 13.3659 9.25305 14.2869 7.43805C15.2419 5.55205 15.1249 4.07605 14.6009 3.05305C13.4869 0.878049 10.4009 0.280049 8.71787 2.01005L8.00087 2.74805ZM8.00087 15C-7.33213 4.86805 3.27987 -3.03995 7.82487 1.14305C7.88487 1.19805 7.94387 1.25505 8.00087 1.31405C8.05729 1.2551 8.116 1.19839 8.17687 1.14405C12.7209 -3.04195 23.3339 4.86705 8.00087 15Z" />
      </g>
      <defs>
        <clipPath id="clip0_3017_11395">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.000976562)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
