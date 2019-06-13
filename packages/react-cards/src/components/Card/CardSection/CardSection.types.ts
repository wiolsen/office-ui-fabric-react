import { IComponent, IComponentStyles, ISlotProp, IStyleableComponentProps } from '@uifabric/foundation';
import { IBaseProps } from '@uifabric/utilities';
import { IStackProps, IStackSlots, IStackTokens } from 'office-ui-fabric-react/lib/Stack';

/**
 * {@docCategory CardSection}
 */
export type ICardSectionComponent = IComponent<ICardSectionProps, ICardSectionTokens, ICardSectionStyles, ICardSectionViewProps>;

// These types are redundant with ICardSectionComponent but are needed until TS function return widening issue is resolved:
// https://github.com/Microsoft/TypeScript/issues/241
// For now, these helper types can be used to provide return type safety when specifying tokens and styles functions.

/**
 * {@docCategory CardSection}
 */
export type ICardSectionTokenReturnType = ReturnType<Extract<ICardSectionComponent['tokens'], Function>>;

/**
 * {@docCategory CardSection}
 */
export type ICardSectionStylesReturnType = ReturnType<Extract<ICardSectionComponent['styles'], Function>>;

/**
 * {@docCategory CardSection}
 */
export type ICardSectionSlot = ISlotProp<ICardSectionProps>;

/**
 * {@docCategory CardSection}
 */
export interface ICardSectionSlots extends Pick<IStackSlots, 'root'> {}

/**
 * {@docCategory CardSection}
 */
export interface ICardSection {}

/**
 * {@docCategory CardSection}
 */
export interface ICardSectionProps
  extends ICardSectionSlots,
    Pick<
      IStackProps,
      'as' | 'horizontal' | 'reversed' | 'horizontalAlign' | 'verticalAlign' | 'verticalFill' | 'disableShrink' | 'grow' | 'wrap'
    >,
    IStyleableComponentProps<ICardSectionProps, ICardSectionTokens, ICardSectionStyles>,
    IBaseProps<ICardSection> {
  /**
   * Determines if the CardSection should disregard the children margin specified by Card.
   */
  fill?: boolean;
}

/**
 * {@docCategory CardSection}
 */
export interface ICardSectionViewProps extends ICardSectionProps {}

/**
 * {@docCategory CardSection}
 */
export interface ICardSectionTokens extends IStackTokens {
  /**
   * Defines the margin to be applied to the CardSection relative to its container.
   */
  margin?: number | string;
}

/**
 * {@docCategory CardSection}
 */
export type ICardSectionStyles = IComponentStyles<ICardSectionSlots>;
