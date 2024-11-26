"use client";
import MyInp from "@/components/ui/Form/MyInp";
import { TProduct } from "@/types/product";
import { LikeOutlined } from "@ant-design/icons";
import { Divider, Progress, Rate, Tabs, TabsProps } from "antd";
import Image from "next/image";
import React from "react";

const DetailsReviewsDiscussionTab = ({
  product,
  randomReviews,
  randomRatings,
}: {
  product: TProduct;
  randomRatings: number;
  randomReviews: number;
}) => {
  const loremText =
    "Harum, ducimus voluptatibus eum dicta quis nesciunt tenetur expedita corrupti labore nostrum error. Placeat, excepturi. Ea fugit voluptatum placeat voluptates deserunt aut perferendis suscipit, et, adipisci omnis sint inventore aliquam aperiam eius architecto, tenetur laudantium minus! Fugiat iure quas, deserunt non facere repellendus neque molestias tenetur quasi maxime, nesciunt id illo. Esse molestias optio, nihil est cum expedita aperiam quidem dolores quas magni inventore nobis, deleniti quibusdam quasi tempore libero earum voluptatum temporibus quae explicabo, dolore harum itaque doloribus? Placeat aperiam, illum optio temporibus, deleniti assumenda quas molestiae ab inventore reprehenderit beatae cumque quia id. In suscipit nihil, doloremque eius, laboriosam doloribus magni modi itaque iure consequatur animi! Delectus dolor quae ea illum recusandae veniam deserunt error minima maxime dolores eius sed fuga iure sapiente labore eaque beatae dolore quod omnis odit ducimus, culpa sint. Facilis fugiat quam quas repellat. Dolor necessitatibus, maxime, unde voluptates distinctio, ipsa quasi ratione alias voluptas molestias deserunt quas sequi facilis soluta dolore assumenda amet voluptatibus accusantium aperiam cum iure! Laudantium maxime voluptas dicta quae ea, ipsa pariatur odit, hic beatae possimus perferendis. Nostrum vero fugiat soluta odit sunt fuga animi ipsa adipisci excepturi eaque totam magnam cupiditate enim asperiores hic natus, aperiam est, facere facilis culpa expedita incidunt! Magni consectetur quis laborum reiciendis illum doloremque laudantium, similique quaerat. Quibusdam veniam porro pariatur sit. Accusantium nesciunt facere autem nostrum totam blanditiis harum sunt fugit provident voluptates, dolorem aperiam obcaecati quod quidem neque, tenetur velit possimus consequatur fugiat. Voluptas consectetur sunt aliquid sequi amet ducimus debitis architecto, error nostrum qui iste veritatis distinctio libero reprehenderit porro facere suscipit placeat quia obcaecati incidunt voluptates praesentium rerum dignissimos. Aspernatur laborum recusandae culpa optio nostrum exercitationem tempora dolores harum autem pariatur commodi, quia consectetur dolorum ea libero? Sequi voluptates fugit dolorem vitae quo omnis corrupti officiis necessitatibus cum, reprehenderit saepe enim eos voluptas labore odit, maxime cupiditate atque velit similique quia dolor! Consectetur rem optio velit sequi nobis est natus in magnam earum, quibusdam repellendus eaque quasi ad quae ab omnis molestiae perferendis fugiat alias reiciendis et pariatur? Voluptates recusandae optio sunt esse. Aliquid nemo molestiae mollitia quaerat adipisci? Quisquam culpa ab explicabo error at dolorum officia, ipsa totam eum porro cum tenetur voluptatum fugiat nesciunt soluta quasi in obcaecati consequatur dicta quam dolores velit facilis minus. Cumque excepturi est praesentium optio et nesciunt fugit quam soluta aut nobis voluptate minima placeat, voluptas, quis quo iusto vero quas? Aliquam, pariatur ullam molestiae deserunt similique delectus voluptatibus quasi quam eligendi maiores, rerum rem dolorum eius modi accusamus obcaecati itaque necessitatibus omnis? Nulla aliquam beatae laborum aspernatur iure eos quam omnis, magnam reiciendis molestiae veritatis pariatur corporis molestias voluptatibus atque. Eligendi ipsam itaque quia. Consectetur eum fugit officia earum tempora tempore quisquam laboriosam rem esse doloremque quas in, mollitia deserunt facere necessitatibus. Vel velit fugit laudantium amet maiores repellendus, nulla ab ratione aut beatae, officiis quibusdam et vitae sapiente ipsum numquam eos impedit dolorem aliquam dicta harum soluta quam! Hic, recusandae! Ullam, nemo?";
  const dummyComments = [
    {
      name: "Christopher Nolan",
      proPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoVYK9gVqDWkfv3blKuxWEO0t9JrH6XSjxg&s",
      comment: "Very Nice",
      rating: 3,
      like: 56,
      daysAgo: 56,
    },
    {
      name: "Brad Pitt",
      proPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXKkELt_XuteDLQY_HKcilbvgT3LDOm5WkQ&s",
      comment:
        "I ordered the product before, very impressive product. Delivery time was too fast.",
      rating: 4,
      like: 105,
      daysAgo: 15,
    },
    {
      name: "Morgan Freeman",
      proPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqMGW9j3Hmy48gELQbvTfwKnMlN9_cfhfrw&s",
      comment: "Very qualityful product",
      rating: 5,
      like: 28,
      daysAgo: 25,
    },
  ];

  const totalCountByRating = [
    {
      rating: 5,
      value: 94,
    },
    {
      rating: 4,
      value: 64,
    },
    {
      rating: 3,
      value: 44,
    },
    {
      rating: 2,
      value: 14,
    },
    {
      rating: 1,
      value: 5,
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Details",
      children: <div className="mt-4">{product?.description || loremText}</div>,
    },
    {
      key: "2",
      label: "Review & Rating",
      children: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <div>
            <MyInp
              type="select"
              label=""
              name={""}
              className="w-fit font-semibold"
              defaultValue="Newest"
              options={["Newest", "Oldest"]?.map((elem) => ({
                label: elem,
                value: elem,
              }))}
            />
            <div className="flex flex-col gap-6">
              {dummyComments?.map((elem, ind) => (
                <div key={ind} className="space-y-2">
                  <div className="flex gap-2 ">
                    <figure className="relative h-[45px] w-[45px] rounded-full">
                      <Image
                        alt={elem.name}
                        src={elem.proPic}
                        fill
                        className="rounded-full object-cover"
                      />
                    </figure>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h2 className="font-semibold text-[16px]">
                          {elem?.name}
                        </h2>{" "}
                        <span className="text-gray text-[13px]">
                          {elem.daysAgo} days
                        </span>
                      </div>
                      <Rate defaultValue={elem?.rating} />
                    </div>
                  </div>
                  <p>{elem?.comment}</p>
                  <div className="flex items-center gap-2">
                    <LikeOutlined /> {elem.like}
                  </div>
                  {dummyComments?.length !== ind + 1 && (
                    <Divider className="!mt-[12px]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-5 md:gap-[10px]">
              <h2 className="font-semibold">Product Review</h2>
              <span className="text-primary font-semibold ml-3">
                {randomReviews} Reviews
              </span>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <Rate disabled value={randomRatings} />
              <span className="font-semibold">({randomRatings})</span>
            </div>
            <Divider className="!mb-[28px] !mt-[32px]" />
            <div className="space-y-1">
              {totalCountByRating?.map((elem, ind) => (
                <div
                  key={ind}
                  className="flex justify-between gap-2 items-center"
                >
                  <h2 className="font-semibold">{elem.rating}</h2>
                  <Progress
                    percent={elem.value}
                    strokeWidth={10}
                    showInfo={false}
                    trailColor="#dfdfdf"
                    strokeColor={"#ffcf11"}
                  />
                  <h2 className="font-semibold">{elem.value}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Discussion",
      children: <div className="mt-4">{loremText}</div>,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="2" items={items} />
    </div>
  );
};

export default DetailsReviewsDiscussionTab;
