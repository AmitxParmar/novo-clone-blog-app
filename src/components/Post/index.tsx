import React from "react";
import Link from "next/link";
import Header from "./Header";
import { defaultImage } from "~/assets";
import Actions from "./Actions";

const Post: React.FC = () => {
  return (
    <div>
      <div className="w-full">
        <div className="h-auto cursor-pointer transition-none ease-in-out">
          {/* Card */}
          <div className="relative mb-2 flex min-w-0 flex-col break-words rounded-xl border-0 border-solid border-[#e0e0e0] bg-white bg-clip-border text-sm hover:bg-cyan/10 ">
            {/* Card Body */}
            <div className="min-h-[1px] flex-[1_1_auto] break-words py-6 px-8 ">
              <Link href="/post/:id"></Link>
              {/* Post Heading */}
              <Header
                community="🌱 ESG & Sustainability"
                profilePic={defaultImage}
                userName="Amit Parmar"
              />
              <Link href="/post/:id" className="relative z-[6] ">
                <h4 className="my-8 mx-0 mb-2 block text-base font-semibold leading-normal text-gray-dark ">
                  🗞 Top TechCrunch articles of the week!
                </h4>
              </Link>
              {/* FeedPosts_Rte Container */}
              <div className='relative z-[1] break-words bg-[linear-gradient(180deg,hsla(0,0%,100%,0),#fff)] text-sm leading-normal antialiased before:absolute before:left-0 before:bottom-0 before:z-[2] before:max-h-[30%] before:w-full before:content-[""] lg:block xl:block'>
                <div className="relative h-full max-h-64 overflow-hidden text-ellipsis break-words text-sm font-normal leading-normal ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore maiores optio magni qui omnis fugit inventore. Vitae
                  harum adipisci voluptate quibusdam, vero qui repellat odio
                  dolor eveniet labore fugit perferendis. Lorem Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Necessitatibus,
                  mollitia iste. Rerum obcaecati fuga rem repellendus eaque
                  distinctio quidem, commodi eius beatae soluta nam suscipit sed
                  doloribus minus mollitia nisi! Eos tempore, esse vel
                  blanditiis excepturi animi illo adipisci iure distinctio
                  impedit, illum aliquam odio autem similique accusantium! Dolor
                  itaque perferendis fuga est deleniti sed cum fugiat iure
                  distinctio unde. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Sequi soluta ipsum voluptates saepe
                  explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Eos
                  tempore, esse vel blanditiis excepturi animi illo adipisci
                  iure distinctio impedit, illum aliquam odio autem similique
                  accusantium! Dolor itaque perferendis fuga est deleniti sed
                  cum fugiat iure distinctio unde. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Sequi soluta ipsum voluptates
                  saepe explicabo enim quo repudiandae illum. Quaerat iure ullam
                  nesciunt quasi ducimus illum ipsum magnam blanditiis maiores
                  ex. Labore excepturi distinctio ad sit officia quibusdam
                  deleniti reiciendis maiores fugiat, cumque aliquid alias
                  doloremque doloribus sint eos. Neque quam dicta tenetur hic.
                  Pariatur velit quibusdam voluptatibus eos amet unde. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, mollitia iste. Rerum obcaecati fuga rem
                  repellendus eaque distinctio quidem, commodi eius beatae
                  soluta nam suscipit sed doloribus minus mollitia nisi! Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                  soluta ipsum voluptates saepe explicabo enim quo repudiandae
                  illum. Quaerat iure ullam nesciunt quasi ducimus illum ipsum
                  magnam blanditiis maiores ex. Labore excepturi distinctio ad
                  sit officia quibusdam deleniti reiciendis maiores fugiat,
                  cumque aliquid alias doloremque doloribus sint eos. Neque quam
                  dicta tenetur hic. Pariatur velit quibusdam voluptatibus eos
                  amet unde.
                </div>
              </div>
              <Actions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
