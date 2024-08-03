import { Typography } from 'src/uikit/Typography';

export type ProfileInfoProps = {
  dob: Date;
  location: {
    city: string;
    coords?: {
      lat: number;
      long: number;
    }
  };
};

export const ProfileInfo = (props: ProfileInfoProps) => {
  return (<ul>
    <li>
      DOB: {props.dob.getUTCFullYear()}
    </li>
    <li>
      City: {props.location.city}
    </li>
    {props.location.coords && (
      <li>
        <Typography
          as={'a'}
          href={`https://maps.google.com/?q=${props.location.coords.lat},${props.location.coords.long}`}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          Location
        </Typography>
      </li>
    )}
  </ul>)
}