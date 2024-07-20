const ProfileInfo = () => <div>
  DOB: [DOB]
  City: [City]
  <button>show more</button>
</div>

const Stat = () => <div>
  Friends: [x]
  Subscribers: [x]
  Photos: [x]
</div>

const ProfilePhotos = () => <div>
  <img/>
  <img/>
  <img/>
  <img/>
</div>

const NewPostForm = () => (<div>
  what's new?<input></input>
  <button>submit</button>
</div>)

const Post = () => (<div>
  <div>Author</div>
  <div>Date</div>
  <div>Text</div>
  <button>like</button>
  <button>Share</button>
  <button>Save</button>
</div>)

export const Profile = () => {
  return (<>
    <div>[FullName]</div>
    <div>[Status]</div>
    <div>[Online]</div>
    <ProfileInfo/>
    <Stat/>
    <ProfilePhotos/>
    <NewPostForm/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    end
  </>)
}
