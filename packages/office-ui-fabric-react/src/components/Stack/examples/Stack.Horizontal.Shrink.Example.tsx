import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Stack } from '../Stack';
import { IStackStyles, IStackTokens } from '../Stack.types';
import { IStackItemStyles } from '../StackItem/StackItem.types';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export interface IExampleState {
  stackWidth: number;
}

export class HorizontalStackShrinkExample extends React.Component<{}, IExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stackWidth: 100
    };
  }

  public render(): JSX.Element {
    const stackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.themeTertiary,
        overflow: 'hidden',
        width: `${this.state.stackWidth}%`
      }
    };
    const stackItemStyles: IStackItemStyles = {
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
    const nonShrinkingStackItemStyles: IStackItemStyles = {
      root: {
        alignItems: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 500
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
          label="Change the stack width to see how child items shrink:"
          min={1}
          max={100}
          step={1}
          defaultValue={100}
          showValue={true}
          onChange={this._onWidthChange}
        />
        <Stack horizontal styles={stackStyles} tokens={innerStackTokens}>
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
      </Stack>
    );
  }

  private _onWidthChange = (value: number): void => {
    this.setState({ stackWidth: value });
  };
}
