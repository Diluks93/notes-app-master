import type { TTooltip } from './models';
import { StyledTooltip } from './styled';

export function Tooltip(props: TTooltip) {
  return <StyledTooltip {...props}>Right click to open settings</StyledTooltip>;
}
