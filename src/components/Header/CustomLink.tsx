import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { theme } from "../../theme";

export default function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <>
        <Link
          style={{ 
              flex: '0 0 33%',
              height: '80px',
              padding: theme.spacing(6, 8),
              opacity: match ? 1 : 0.5, 
              backgroundColor: match ? 'rgb(255,255,255,3%)' : 'transparent'
            }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </>
    );
  }