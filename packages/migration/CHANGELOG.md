# Change Log - @uifabric/migration

This log was last generated on Thu, 13 Jun 2019 00:24:48 GMT and should not be manually modified.

## 7.0.1
Thu, 13 Jun 2019 00:24:48 GMT

### Patches

- Initial release of Fabric 7

## 0.3.0
Wed, 12 Jun 2019 00:42:26 GMT

### Minor changes

- Non-destructive run by default, show affected files.
- Add migration for removed ColorPicker props
- Ignore files in node_modules directories

### Patches

- ComboBox: Migration to rename deprecated props to new props.
- SearchBox: Alert for onChange props arguments change.
- Remove createRef imports from OUFR
- Nav: import from @uifabric/legacy
- @autobind: Migration to warn about removal.
- Remove migration for nav to legacy
- Add migrations for removed TextField props

## 0.2.2
Tue, 14 May 2019 07:50:30 GMT

### Patches

- Update Fabric assets link

## 0.2.1
Tue, 02 Apr 2019 00:38:15 GMT

### Patches

- Use ^ ranges instead of >=

## 0.2.0
Fri, 22 Mar 2019 17:56:40 GMT

### Minor changes

- migration: makes migration script match the name of the package

## 0.1.4
Fri, 22 Mar 2019 12:34:41 GMT

### Patches

- migration: .gitignore apparently ignored all bin/ scripts and this actually makes the bin script part of the package

## 0.1.3
Thu, 21 Mar 2019 17:21:42 GMT

### Patches

- migration: the bin directory was being ignored, this change makes sure the npm publish step will include the bin scripts

## 0.1.2
Wed, 20 Mar 2019 03:15:21 GMT

### Patches

- Migration: fixed the bin script's shebang to point to the right "env" executable

## 0.1.1
Tue, 19 Mar 2019 18:05:11 GMT

### Patches

- Initial release, under construction

