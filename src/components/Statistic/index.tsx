import { Typography } from 'src/uikit/Typography';

export type StatisticProps = {
  friends: number;
  followers: number;
  photos: number;
};

const Item = (props: { label: string; value: number }) => {
  if (!props.value) return null;
  return (
    <div className={'flex flex-col'}>
      <Typography className={'text-center'}>{props.value}</Typography>
      <Typography className={'text-center'}>{props.label}</Typography>
    </div>
  );
};

export const Statistic = (props: StatisticProps) => {
  return (
    <div className={'flex flex-row justify-around text-slate-400'}>
      <Item
        label={'Friends'}
        value={props.friends}
      />
      <Item
        label={'Followers'}
        value={props.followers}
      />
      <Item
        label={'photos'}
        value={props.photos}
      />
    </div>
  );
};
