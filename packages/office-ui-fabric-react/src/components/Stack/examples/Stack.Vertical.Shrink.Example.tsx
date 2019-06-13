import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from '../Stack';
import { IStackStyles, IStackTokens } from '../Stack.types';
import { IStackItemStyles } from '../StackItem/StackItem.types';
import { mergeStyles, DefaultPalette, IStyle } from 'office-ui-fabric-react/lib/Styling';

export interface IExampleState {
  stackHeight: number;
}

export class VerticalStackShrinkExample extends React.Component<{}, IExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stackHeight: 100
    };
  }

  public render(): JSX.Element {
    const stackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.themeTertiary,
        height: `${this.state.stackHeight}%`,
        overflow: 'hidden'
      }
    };
    const stackItemStyles: IStackItemStyles = {
      root: {
        alignItems: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden'
      }
    };
    const containerStyles: IStyle = {
      height: 200
    };
    const nonShrinkingStackItemStyles: IStackStyles = {
      root: {
        alignItems: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden'
      }
    };

    const outerStackTokens: IStackTokens = { childrenGap: 5 };
    const innerStackTokens: IStackTokens = {
      childrenGap: 5,
      padding: 10
    };

    return (
      <Stack tokens={outerStackTokens}>
        <Slider
          label="Change the stack height to see how child items shrink:"
          min={1}
          max={100}
          step={1}
          defaultValue={100}
          showValue={true}
          onChange={this._onHeightChange}
        />
        <div className={mergeStyles(containerStyles)}>
          <Stack styles={stackStyles} tokens={innerStackTokens}>
            <Stack.Item grow styles={stackItemStyles}>
              I shrink
            </Stack.Item>
            <Stack.Item grow styles={stackItemStyles}>
              I shrink
            </Stack.Item>
            <Stack.Item grow disableShrink styles={nonShrinkingStackItemStyles}>
              I don't shrink
            </Stack.Item>
            <Stack.Item grow styles={stackItemStyles}>
              I shrink
            </Stack.Item>
          </Stack>
        </div>
      </Stack>
    );
  }

  private _onHeightChange = (value: number): void => {
    this.setState({ stackHeight: value });
  };
}
