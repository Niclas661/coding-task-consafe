import * as React from 'react';

const PuzzleIcon = (props: React.ComponentPropsWithRef<'svg'>) => (
  <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"icon/puzzle"}</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M11.5 4a.5.5 0 0 1 .5.5v2h6v6h2a.5.5 0 1 1 0 1h-2v6h-2.12a4.7 4.7 0 0 0-8.76 0H5v-2.12a4.7 4.7 0 0 0 0-8.76V6.5h6v-2a.5.5 0 0 1 .5-.5m0-2A2.5 2.5 0 0 0 9 4.5H5a2 2 0 0 0-2 2v3.8h.3a2.7 2.7 0 0 1 0 5.4H3v3.8a2 2 0 0 0 2 2h3.8v-.3a2.7 2.7 0 0 1 5.4 0v.3H18a2 2 0 0 0 2-2v-4a2.5 2.5 0 1 0 0-5v-4a2 2 0 0 0-2-2h-4A2.5 2.5 0 0 0 11.5 2"
        fill={props.fill}
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default PuzzleIcon;
