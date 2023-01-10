import React from 'react';
import { BaseText } from 'src/components/Common/BaseText';
import { Layout } from 'src/components/Layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout title="プライバシー | あすらいと">
      <div className="p-vw-12" />

      <BaseText align="center" content="large">
        商品購入に関する規約・プライバシーポリシーへの同意
      </BaseText>

      <div className="p-vw-12" />

      <BaseText align="start" content="small">
        合同会社あすらいと（以下「当社」という）が販売する製品（以下「本製品」という）にあたっては、下記記載事項（以下「本規約」という）をご確認頂き、購入に際し、保護措置を講じた上で当社が個人情報を取得・保有・利用することにご同意頂ける場合のみご購入下さい。
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="start" content="small">
        1. 本製品の購入後のキャンセル、返品または返金はできないものとします。
        <br />
        2.
        再販によりトラブルが発生した場合、第三者に損害が生じた場合であっても、本製品の瑕疵に起因する場合を除き、本購入が自己責任のもとにされるものであることに鑑み、当社は、損害賠償その他一切の責任を負担致しません。
        <br />
        3.
        万一、不良品等がございましたら、商品到着後７日以内にお電話でご連絡下さい。送料は当社負担で、良品と交換させていただきます。期限を過ぎますと、交換のご要望はお受けできなくなりますので、ご了承下さい。
        <br />
        4.
        本同事項の準拠法は日本法とし、本登録に関する一切の紛争について訴訟の必要が生じた場合、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
        <br />
        5.
        当社が必要と認める場合、当社は事前の了承を得ることなく、本規約を変更することがあります。この場合、本登録に関する一切の事項は、変更後の規約によるものとします。変更された本規約は、サイトへの掲示又は当社が適当と判断する方法により公表若しくは通知することにより効力を生じるものとし、掲示等と同時に、当該変更後の本規約を承諾したものとみなします。
        <br />
        6.
        当社では、お預かりした個人情報について、適正かつ安全に管理・運用することに努め、以下のとおりプライバシーポリシーを定めます。
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="start" content="small">
        ●利用目的
        <br />
        当社は、収集した個人情報について、以下の目的のために利用いたします。
        <br />
        ①商品発送やサービス実施及びアフターサービスのため
        <br />
        ②資料請求に対する発送のため
        <br />
        ③相談・お問い合わせへの回答のため
        <br />
        ④商品・サービス等の案内のため
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="start" content="small">
        ●個人情報の委託
        <br />
        当社は、個人情報の利用目的達成に必要な範囲内で、個人情報取扱い業務の一部または全部を委託することがあります。
        なお、委託先における個人情報の取扱いが適切に行なわれるよう、個人情報の保護を義務付け、当社が適切な監督の下厳重な管理を実施します。
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="start" content="small">
        ●第三者提供当社は、以下の場合を除いて、ご本人の同意なく第三者に個人データを提供することは致しません。
        <br />
        ①法令に基づく場合
        <br />
        ②人の生命・身体・財産を保護するために必要で、本人から同意を得ることが難しい場合
        <br />
        ③公衆衛生の向上・児童の健全な育成のために必要で、本人から同意を得ることが難しい場合
        <br />
        ④国の機関や地方公共団体、その委託者などによる法令事務の遂行にあたって協力する必要があり、かつ本人の同意を得ることで事務遂行に影響が生じる可能性がある場合
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="start" content="small">
        ●開示請求
        <br />
        個人情報について、ご本人には、開示・訂正・削除・利用停止を請求する権利があります。手続きにあたっては、ご本人確認のうえ対応させていただきます。詳細につきましては下記の窓口までご連絡下さい。
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="end" content="small">
        個人情報相談窓口
        <br />
        合同会社あすらいと
        <br />
        TEL: 090-9118-1128
        <br />
        E-mail: aslite.hp@gmail.com
        <br />
        <br />
        ＜個人情報に関する責任者＞
        <br />
        個人情報保護管理者　望月
      </BaseText>

      <div className="p-vw-6" />

      <BaseText align="center">戻る際はブラウザのタブを閉じて下さい</BaseText>

      <div className="p-vw-12" />
    </Layout>
  );
};

export default PrivacyPolicy;
