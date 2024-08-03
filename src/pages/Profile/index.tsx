import { Gallery, GalleryProps } from 'src/components/Gallery';
import { Post } from 'src/components/Post';
import { PostForm } from 'src/components/PostForm';
import {
  ProfileHeader,
  ProfileHeaderProps,
} from 'src/components/ProfileHeader';
import { ProfileInfo, ProfileInfoProps } from 'src/components/ProfileInfo';
import { Statistic, StatisticProps } from 'src/components/Statistic';

type Data = {
  galleryProps: GalleryProps;
  profileHeaderProps: ProfileHeaderProps;
  profileInfoProps: ProfileInfoProps;
  statisticProps: StatisticProps;
};

const data: Data = {
  galleryProps: {
    items: new Array(20).fill(null).map((_, i) => ({
      src: `https://cataas.com/cat?key=${i}`,
      label: `Placeholder ${i}`,
    })),
  },
  profileHeaderProps: {
    isOnline: true,
    name: 'John Doe',
    status: 'Looking for a job',
  },
  profileInfoProps: {
    dob: new Date(0),
    location: {
      city: 'Carretera Tulum',
      coords: {
        lat: 20.395914,
        long: -87.312324,
      },
    },
  },
  statisticProps: {
    photos: 100,
    followers: 1000,
    friends: 100,
  },
};

export const Profile = () => {
  return (
    <>
      <ProfileHeader {...data.profileHeaderProps} />
      <ProfileInfo {...data.profileInfoProps} />
      <Statistic {...data.statisticProps} />
      <Gallery {...data.galleryProps} />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
};
