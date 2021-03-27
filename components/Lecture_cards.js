import { useState, useEffect } from 'react';
import Link from 'next/link'
import { API } from 'aws-amplify'
import { useUser } from '@auth0/nextjs-auth0';
import { listPosts } from '../graphql/queries';

export default function Lecture_cards() {

  const { user, error, isLoading } = useUser();
  let userName = user.name.substring(0, user.name.indexOf("@"));
  const [ posts, setPosts ] = useState([])
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts
    })
    setPosts(postData.data.listPosts.items)
  }

    return (
        <div className="container">
          <div>

            <div className="columns">
                <div className="column has-text-centered">
                  <h1 className="title" style={{textTransform: 'capitalize'}}>Welcome {userName}</h1><br />
                </div>
            </div>
            
            <div id="app" className="row columns is-multiline">

                {
                  posts.map((post, index) => (
                    <Link key={index} href={`/posts/${post.id}`}>

                    <div className="column is-4">
                      <div className="card large mt-5">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-4 no-padding">{post.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    </Link>
    ))
                }


            </div>

          </div>
        </div>
    )
}
