/** @jsx withSlots */
import { Icon, Text } from 'office-ui-fabric-react';
import { getNativeProps, buttonProperties } from 'office-ui-fabric-react/lib/Utilities';
import { withSlots, getSlots } from '../../Foundation';
import {
  ICollapsibleSectionTitleComponent,
  ICollapsibleSectionTitleProps,
  ICollapsibleSectionTitleSlots
} from './CollapsibleSectionTitle.types';

export const CollapsibleSectionTitleView: ICollapsibleSectionTitleComponent['view'] = props => {
  const Slots = getSlots<ICollapsibleSectionTitleProps, ICollapsibleSectionTitleSlots>(props, {
    root: 'button',
    chevron: Icon,
    text: Text
  });

  const buttonProps = getNativeProps<React.HTMLAttributes<HTMLButtonElement>>(props, buttonProperties);

  return (
    <Slots.root {...buttonProps} ref={props.focusElementRef}>
      {!props.chevronDisabled && <Slots.chevron iconName="ChevronDown" />}
      <Slots.text />
    </Slots.root>
  );
};
