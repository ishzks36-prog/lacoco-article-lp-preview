# qa-report

## Scope

ラココ記事LPの初稿HTMLです。参考URLのアンケート進行型LP構造を借り、ラココRAGと競合漫画記事LP RAGから抽出した「自己処理ループ」「安すぎる広告への不信」「契約前確認」の信念変化に沿って制作しました。

## Evidence Used

- `ev_official_home_001`
- `ev_official_menu_001`
- `ev_dpro_item_17090216`
- `ev_dpro_item_18047667`
- `cmp_stlassh_11266765`
- `cmp_tbc_1889031`
- `cmp_regina_5335956`

## Compliance Notes

- DPro/他社LPの価格・台詞・画像は流用していません。
- 価格やキャンペーン詳細は断定せず、無料カウンセリングでの確認に寄せています。
- 医療脱毛、永久脱毛、効果保証、痛みゼロ、シミ/黒ずみ断定などの高リスク表現は使っていません。
- 公式画像は公式参照素材として外部URL利用です。公開前に利用許諾、またはImage2/owned素材への差し替えが必要です。

## Draft QA

- CTA intent: 契約ではなく「総額と空き枠だけ確認」
- Main belief order: 自己処理の焦り -> 安すぎる広告への不信 -> 総額/範囲/条件確認 -> 無料相談
- Responsive target: mobile-first, max-width 390px
- Browser QA: Edge headless 390px screenshotで目視確認

## Remaining Risks

- 公式画像の本番利用可否
- 現行オファー、料金、対象条件の最終確認
- Image2 credentials unavailableのため、漫画パネル画像ではなくHTML記事LPとして制作
