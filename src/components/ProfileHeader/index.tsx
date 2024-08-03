import { Typography } from 'src/uikit/Typography';

export type ProfileHeaderProps = {
  isOnline: boolean;
  name: string;
  status?: string;
};

export const ProfileHeader = (props: ProfileHeaderProps) => {
  return (
    <div>
      <div className={'flex justify-between'}>
        <Typography variant={'h6'}>{props.name}</Typography>
        <Typography className={'text-end'} variant={'span'}>{props.isOnline ? 'online' : 'offline'}</Typography>
      </div>
      <Typography variant={'span'}>{props.status}</Typography>
    </div>
  )
}