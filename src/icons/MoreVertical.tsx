import * as React from 'react';

const MoreVertical = (props: React.ComponentPropsWithRef<'svg'>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"icon/more vertical"}</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
        fill="#4E5E6F"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default MoreVertical;
