import { RouteComponentProps } from 'react-router';
import { ConnectedProps } from './connect';

export type OwnProps = RouteComponentProps;

export interface Props extends ConnectedProps, OwnProps {}
