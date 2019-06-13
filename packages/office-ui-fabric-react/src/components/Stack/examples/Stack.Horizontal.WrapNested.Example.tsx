import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from '../Stack';
import { IStackStyles, IStackTokens } from '../Stack.types';
import { IStyleSet, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export interface IExampleState {
  stackWidth: number;
}

export class HorizontalStackWrapNestedExample extends React.Component<{}, IExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stackWidth: 100
    };
  }

  public render(): JSX.Element {
    const textStyles = {
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: DefaultPalette.white
    } as IStyleSet<{}>;

    const { stackWidth } = this.state;

    const containerStackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.themeTertiary,
        width: `${stackWidth}%`
      }
    };
    const firstStackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.neutralTertiary,
        selectors: {
          '& span': {
            ...textStyles,
            background: DefaultPalette.themePrimary
          }
        }
      }
    };
    const secondStackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.neutralSecondary,
        selectors: {
          '& span': {
            ...textStyles,
            background: DefaultPalette.themeDark
          }
        }
      }
    };
    const thirdStackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.neutralPrimary,
        selectors: {
          '& span': {
            ...textStyles,
            background: DefaultPalette.themeDarker
          }
        }
      }
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 10 };
    const wrapStackTokens: IStackTokens = { childrenGap: '30 40' };
    const firstStackTokens: IStackTokens = { childrenGap: '10 30' };
    const secondStackTokens: IStackTokens = { childrenGap: '20 50' };

    return (
      <Stack tokens={sectionStackTokens}>
        <Slider
          label="Change the stack width to see how child items wrap onto multiple rows:"
          min={1}
          max={100}
          step={1}
          defaultValue={100}
          showValue={true}
          onChange={this._onWidthChange}
        />

        <Stack horizontal wrap styles={containerStackStyles} tokens={wrapStackTokens}>
          <Stack horizontal wrap styles={firstStackStyles} tokens={firstStackTokens}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
          </Stack>

          <Stack horizontal wrap styles={secondStackStyles} tokens={secondStackTokens}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </Stack>

          <Stack horizontal wrap styles={thirdStackStyles}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </Stack>
        </Stack>
      </Stack>
    );
  }

  private _onWidthChange = (value: number): void => {
    this.setState({ stackWidth: value });
  };
}
