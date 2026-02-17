export interface Product {
    id: string;
    category: 'bags' | 'wallets' | 'jackets' | 'custom';
    nameEn: string;
    nameJp: string;
    descEn: string;
    descJp: string;
    material: string;
    timeline: string;
    color: string;
    images: string[];
}

export const products: Product[] = [
    {
        id: 'tote-01',
        category: 'bags',
        nameEn: 'Everyday Tote',
        nameJp: 'エブリデイトート',
        descEn: 'Full-grain vegetable-tanned leather tote with hand-stitched handles and solid brass hardware. Designed for daily use.',
        descJp: 'フルグレインのベジタブルタンニンレザーを使用したトートバッグ。手縫いのハンドルと無垢の真鍮金具。日常使いに。',
        material: 'Full-grain veg-tan',
        timeline: '21 days',
        color: '#8b6914',
        images: ['images/tote.png'],
    },
    {
        id: 'briefcase-01',
        category: 'bags',
        nameEn: 'Artisan Briefcase',
        nameJp: '職人ブリーフケース',
        descEn: 'Structured briefcase with double-handle design. Interior pockets for laptop and documents. Hand-burnished edges.',
        descJp: '構造的なブリーフケース。ノートPCと書類用の内ポケット付き。手磨きのエッジ仕上げ。',
        material: 'Full-grain veg-tan',
        timeline: '28 days',
        color: '#6d5310',
        images: ['images/hero.png'],
    },
    {
        id: 'wallet-01',
        category: 'wallets',
        nameEn: 'Bifold Wallet',
        nameJp: '二つ折り財布',
        descEn: 'Slim bifold wallet with four card slots, a bill compartment, and a hidden pocket. Saddle-stitched throughout.',
        descJp: 'カードスロット4つ、札入れ、隠しポケット付きのスリムな二つ折り財布。全体をサドルステッチ。',
        material: 'Full-grain Buttero',
        timeline: '14 days',
        color: '#a47d1a',
        images: ['images/wallet.png'],
    },
    {
        id: 'cardholder-01',
        category: 'wallets',
        nameEn: 'Card Holder',
        nameJp: 'カードホルダー',
        descEn: 'Minimalist card holder with two pockets and a center compartment. Hand-stitched with waxed linen thread.',
        descJp: 'ポケット2つとセンターコンパートメントのミニマルカードホルダー。蝋引きリネン糸で手縫い。',
        material: 'Full-grain Buttero',
        timeline: '10 days',
        color: '#5c4a2a',
        images: ['images/leather-texture.png'],
    },
    {
        id: 'jacket-01',
        category: 'jackets',
        nameEn: 'Rider Jacket',
        nameJp: 'ライダージャケット',
        descEn: 'Full-grain cowhide rider jacket with hand-stitched detailing. Lined with natural cotton. Brass zip and snaps.',
        descJp: 'フルグレインの牛革ライダージャケット。手縫いのディテール。天然コットン裏地。真鍮ジッパーとスナップ。',
        material: 'Full-grain cowhide',
        timeline: '45 days',
        color: '#2d2d2d',
        images: ['images/artisan.png'],
    },
    {
        id: 'custom-01',
        category: 'custom',
        nameEn: 'Bespoke Messenger',
        nameJp: 'ビスポークメッセンジャー',
        descEn: 'A custom-designed messenger bag created for a client in Berlin. Shoulder strap with adjustable brass buckle.',
        descJp: 'ベルリンのクライアントのためにデザインされたカスタムメッセンジャーバッグ。調節可能な真鍮バックル付きショルダーストラップ。',
        material: 'Full-grain Pueblo',
        timeline: '30 days',
        color: '#7a5c36',
        images: ['images/workshop.png'],
    },
    {
        id: 'custom-02',
        category: 'custom',
        nameEn: 'Camera Strap',
        nameJp: 'カメラストラップ',
        descEn: 'Custom camera strap with embossed initials. Vegetable-tanned leather with brass clasps.',
        descJp: 'イニシャル刻印入りカスタムカメラストラップ。ベジタブルタンニンレザーと真鍮クラスプ。',
        material: 'Full-grain veg-tan',
        timeline: '12 days',
        color: '#b8960c',
        images: ['images/leather-texture.png'],
    },
];

