import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { Text } from '@mantine/core';
import { coceriumImageList } from 'src/utils/coceriumImageList';
import { aquariumImageList } from 'src/utils/aquariumImageList';
import { ArticleCardImage } from 'src/components/Main/ActivityCardImage';
import { ActivityCarousel } from 'src/components/Main/ActivityCarousel';

export const Activity = () => {
  return (
    <>
      <BaseText
        size={100}
        color="green"
        align="center"
        fontFamily="Work Sans"
      >
        ACTIVITY
      </BaseText>

      <div className="p-vw-8" />

      <div className="flex flex-col items-start md:flex-row">
        <div className="w-full md:mr-10 md:w-1/2">
          <ArticleCardImage
            image="/activity_aquarium.webp"
            title="Aquarium"
            category="Aquarium"
            isBudge={true}
          />
        </div>
        <div className="text-md mt-10 w-full px-3 md:mt-0 md:ml-10 md:mr-10 md:w-1/2 md:text-lg">
          <BaseText
            content="large"
            align="center"
            color="cyan"
            fontFamily="Dela Gothic One"
          >
            『日常を切り取る』
          </BaseText>
          <br />
          <Text>
            アクアホープではお店、ご自宅、オフィスなど様々な状況に合わせて水槽の設置を行っております。
          </Text>
          <br />
          <Text>
            小さなお子様からご年配の方まで、男女と合わず人気がある水槽は、お店などの人が集まる場や人が出入りする場所に熱帯魚水槽があるだけで、そこからコミュニケーションを深めるいいきっかけにある集客効果も絶大です。
          </Text>
          <br />
          <Text>
            また、自宅に置くことで綺麗な緑色の水槽や、鮮やかな魚が泳ぐ姿が日々のストレスや疲れを緩和し「癒やし」に繋がると感じています。
          </Text>
          <br />
          <Text>
            レイアウトにはこだわりがあり『自然を切り取る』をコンセプトに、大自然の一部を切り取ったようなネイチャーアクアリウムの水槽を提供させていただいています。
          </Text>
          <Text>尚、オーダーメイドの水槽も可能です。</Text>
        </div>
      </div>

      <div className="p-vw-24" />

      <div className="mx-4">
        <ActivityCarousel imageList={aquariumImageList} />
      </div>

      <div className="p-vw-48" />

      <div className="flex flex-col items-start md:flex-row-reverse">
        <div className="w-full md:mr-10 md:w-1/2">
          <ArticleCardImage
            image="/activity_cocerium.webp"
            title="Cocerium"
            category="Cocerium"
            isBudge={false}
          />
        </div>
        <div className="text-md mt-10 w-full px-3 md:mt-0 md:ml-10 md:mr-10 md:w-1/2 md:text-lg">
          <BaseText
            content="large"
            align="center"
            color="dimmed"
            fontFamily="Dela Gothic One"
          >
            『日常に自然の癒やしを』
          </BaseText>

          <br />
          <Text>
            コケをメインに数種類の観葉植物、流木、石等を使ってガラス容器に自然の世界を創った癒しのインテリアです。
          </Text>
          <br />
          <Text>
            お部屋や食卓、玄関などに置くだけで自然を身近に感じ優しい雰囲気を与えてくれます。
          </Text>
          <br />
          <Text>
            管理方法は水と光を与えるだけで簡単に育ちます。また、オーダーメイドでお誕生日や結婚式の記念日など大切な方へのプレゼントにも最適です。
          </Text>
          <br />
          <Text>
            アクアホープではお店、ご自宅、オフィスなど様々な状況に合わせて水槽の設置を行っております。
          </Text>
          <Text>容器小：￥1500〜　※容器、内容によって異なります</Text>
          <Text>オーダーメイド：￥4000〜</Text>
        </div>
      </div>

      <div className="p-vw-24" />

      <div className="mx-4">
        <ActivityCarousel imageList={coceriumImageList} />
      </div>
    </>
  );
};
