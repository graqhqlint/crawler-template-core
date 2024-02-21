export enum MenuCategories {
  LOTTERY = "LOTTERY",
  MEMBER = "MEMBER",
  SYSTEM = "SYSTEM",
  COMMON = "COMMOM",
  SERVER = "SERVER",
}

export enum DefaultMenuLinks {
  DASHBOARD = "/dashboard",
  PROFILE = "/profile",
}

export enum DefaultMenuCode {
  DASHBOARD = "dashboard",
  PROFILE = "profile",
}

export const menuCategoriesData = [
  {
    code: "COMMOM",
    name: "Common",
  },
  {
    code: "TOKEN",
    name: "Token",
  },
  {
    code: "NFT",
    name: "NFT",
  },
  {
    code: "MEMBER",
    name: "Member",
  },
  {
    code: "SYSTEM",
    name: "System",
  },
];

export type MenuData = {
  code?: string;
  name?: string;
  title?: string;
  description?: string;
  header?: string;
  url?: string;
  image?: string;
  Icon?: any;
  icon?: string;
  frame?: string;
  keywords?: string;
  catergoryCode?: string;
  active?: boolean;
};

export const adminMenusData: MenuData[] = [
  {
    catergoryCode: "MEMBER",
    code: "user",
    header: "User",
    icon: "FcBusinessman",
    title: "User",
    url: "/user",
  },
  {
    catergoryCode: "MEMBER",
    code: "customer",
    header: "customer",
    icon: "FcWorkflow",
    title: "customer",
    url: "/customer",
  },
  {
    catergoryCode: "TOKEN",
    code: "type-event",
    header: "Type Event",
    icon: "FcWorkflow",
    title: "Type Event",
    url: "/type-event",
  },
  {
    catergoryCode: "SYSTEM",
    code: "setting",
    header: "Setting",
    icon: "FcServices",
    title: "Setting",
    url: "/setting/COMMON",
  },
  {
    catergoryCode: "SYSTEM",
    code: "job",
    header: "Jobs",
    icon: "FcWorkflow",
    title: "Jobs",
    url: "/job",
  },
  {
    catergoryCode: "SYSTEM",
    code: "provider",
    header: "provider",
    icon: "FcWorkflow",
    title: "provider",
    url: "/provider",
  },
  {
    catergoryCode: "TOKEN",
    code: "campaign",
    header: "campaign",
    icon: "FcWorkflow",
    title: "campaign",
    url: "/campaign",
  },
  {
    catergoryCode: "TOKEN",
    code: "transaction",
    header: "transaction",
    icon: "FcWorkflow",
    title: "transaction",
    url: "/transaction",
  },
  {
    catergoryCode: "SYSTEM",
    code: "support",
    header: "support",
    icon: "FcWorkflow",
    title: "support",
    url: "/support",
  },
  {
    catergoryCode: "NFT",
    code: "nft",
    header: "nft",
    icon: "FcWorkflow",
    title: "nft",
    url: "/nft",
  },
  {
    catergoryCode: "NFT",
    code: "nft-airdrop",
    header: "nft-airdrop",
    icon: "FcWorkflow",
    title: "NFT Airdrop",
    url: "/nft-airdrop",
  },
  {
    catergoryCode: "NFT",
    code: "nft-info",
    header: "nft-info",
    icon: "FcWorkflow",
    title: "NFT Info",
    url: "/nft-info",
  },
  {
    catergoryCode: "NFT",
    code: "nft-category",
    header: "nft-category",
    icon: "FcWorkflow",
    title: "NFT Category",
    url: "/nft-category",
  },
  {
    catergoryCode: "NFT",
    code: "nft-element",
    header: "nft-element",
    icon: "FcWorkflow",
    title: "NFT Element",
    url: "/nft-element",
  },
  {
    catergoryCode: "NFT",
    code: "nft-habitant",
    header: "nft-habitant",
    icon: "FcWorkflow",
    title: "NFT Habitant",
    url: "/nft-habitant",
  },
  {
    catergoryCode: "NFT",
    code: "nft-rarity",
    header: "nft-rarity",
    icon: "FcWorkflow",
    title: "NFT Rarity",
    url: "/nft-rarity",
  },
  {
    catergoryCode: "NFT",
    code: "nft-type",
    header: "nft-type",
    icon: "FcWorkflow",
    title: "NFT Type",
    url: "/nft-type",
  },
];

export const editorMenuData: MenuData[] = [
  {
    catergoryCode: "TOKEN",
    code: "campaign",
    header: "campaign",
    icon: "FcWorkflow",
    title: "campaign",
    url: "/campaign",
  },
  {
    catergoryCode: "TOKEN",
    code: "transaction",
    header: "transaction",
    icon: "FcWorkflow",
    title: "transaction",
    url: "/transaction",
  },
  {
    catergoryCode: "SYSTEM",
    code: "support",
    header: "support",
    icon: "FcWorkflow",
    title: "support",
    url: "/support",
  },
  {
    catergoryCode: "NFT",
    code: "nft",
    header: "nft",
    icon: "FcWorkflow",
    title: "nft",
    url: "/nft",
  },
  {
    catergoryCode: "NFT",
    code: "nft-airdrop",
    header: "nft-airdrop",
    icon: "FcWorkflow",
    title: "NFT Airdrop",
    url: "/nft-airdrop",
  },
  {
    catergoryCode: "NFT",
    code: "nft-info",
    header: "nft-info",
    icon: "FcWorkflow",
    title: "NFT Info",
    url: "/nft-info",
  },
  {
    catergoryCode: "NFT",
    code: "nft-category",
    header: "nft-category",
    icon: "FcWorkflow",
    title: "NFT Category",
    url: "/nft-category",
  },
  {
    catergoryCode: "NFT",
    code: "nft-element",
    header: "nft-element",
    icon: "FcWorkflow",
    title: "NFT Element",
    url: "/nft-element",
  },
  {
    catergoryCode: "NFT",
    code: "nft-habitant",
    header: "nft-habitant",
    icon: "FcWorkflow",
    title: "NFT Habitant",
    url: "/nft-habitant",
  },
  {
    catergoryCode: "NFT",
    code: "nft-rarity",
    header: "nft-rarity",
    icon: "FcWorkflow",
    title: "NFT Rarity",
    url: "/nft-rarity",
  },
  {
    catergoryCode: "NFT",
    code: "nft-type",
    header: "nft-type",
    icon: "FcWorkflow",
    title: "NFT Type",
    url: "/nft-type",
  },
];
