import * as React from 'react';

const PickIcon = (props: React.ComponentPropsWithRef<'svg'>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"icon/pick"}</title>
    <g fill="none" fillRule="evenodd">
      <path
        d="M16 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1l5.55 5.55v.05a1 1 0 0 1 .23 1l-2.48 6.81a1 1 0 1 1-1.88-.68l2.16-5.92a.5.5 0 0 0-.12-.52L13.17 7h-2.34l-6.29 6.29a.48.48 0 0 0-.11.52l2.15 5.92a1 1 0 0 1-1.88.68l-2.48-6.86a1 1 0 0 1 .23-1L8 7l-.117-.007A1 1 0 0 1 7 6V3a1 1 0 0 1 1-1Zm.06 12a.44.44 0 0 1 .44.44v6.12a.44.44 0 0 1-.44.44H7.94a.44.44 0 0 1-.44-.44v-6.12a.44.44 0 0 1 .44-.44Zm-5.81 1.5H9v4h6v-4h-1.31v1.19a.5.5 0 0 1-.72.45l-1-.52-1 .52a.5.5 0 0 1-.72-.45V15.5Zm5.3-11.9h-7v2h7v-2Z"
        fill={props.fill}
        fillRule="nonzero"
      />
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default PickIcon;
