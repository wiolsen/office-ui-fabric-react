import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { SpinnerPageProps } from './SpinnerPage.doc';
import { Platforms } from '../../../interfaces/Platforms';
import { IPageSectionProps } from '@uifabric/example-app-base/lib/index2';

export const SpinnerPage: React.StatelessComponent<IControlsPageProps> = props => {
  const { platform } = props;
  return (
    <ControlsAreaPage
      {...props}
      title="Spinner"
      {...SpinnerPageProps[platform]}
      otherSections={_otherSections(platform) as IPageSectionProps[]}
    />
  );
};

function _otherSections(platform: Platforms): IPageSectionProps<Platforms>[] {
  switch (platform) {
    case 'ios':
      return [
        {
          sectionName: 'Implementation',
          editUrl:
            'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/apps/fabric-website/src/pages/Controls/SpinnerPage/docs/ios/SpinnerImplementation.md',
          content: require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/SpinnerPage/docs/ios/SpinnerImplementation.md') as string
        }
      ];
  }
}
