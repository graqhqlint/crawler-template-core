import { SettingType } from "../graphql/modules/setting/setting.model";
import { adminMenusData, editorMenuData, menuCategoriesData } from "../helpers/menu.helper";

export enum SettingGroupSlug {
  COMMON = "COMMON",
  WEBSITE_SETTING = "WEBSITE_SETTING",
  MESSAGE_TEMPLATE = "MESSAGE_TEMPLATE",
  NFT_SETTING = "NFT_SETTING",
  USER_SETTING = "USER_SETTING",
  CUSTOMER_SETTING = "CUSTOMER_SETTING",
}
export enum SettingKey {
  // Cấu hình chung
  TITLE = "TITLE", // Tiêu đề ứng dụng
  WEBSITE_DOMAIN = "WEBSITE_DOMAIN",
  API_DOMAIN = "API_DOMAIN",
  MEDIA_DOMAIN = "MEDIA_DOMAIN",
  LOGO_URL = "LOGO_URL",
  MAINTENANCE = "MAINTENANCE",

  // cấu hình website
  USE_MENU_CATEGORY = "USE_MENU_CATEGORY",
  ADMIN_MENU = "ADMIN_MENU",
  EDITOR_MENU = "EDITOR_MENU",
  MENU_CATEGORIES = "MENU_CATEGORIES",

  //Cấu hình NFT
  ALLOW_SALE = "ALLOW_SALE",
  ALLOW_PKG = "ALLOW_PKG",
  ALLOW_PRIVATE_SALE = "ALLOW_PRIVATE_SALE",

  //CAU HINH CUSTOMER
  CONFIRM_ICP_WALLET = "CONFIRM_ICP_WALLET",
}
export const SETTING_DATA = [
  {
    slug: SettingGroupSlug.COMMON,
    name: "Common setting",
    desc: "Common setting here",
    icon: "FcSettings",
    readOnly: true,
    settings: [
      {
        type: SettingType.string,
        name: "Website Title",
        key: SettingKey.TITLE,
        value: `dc8.io`,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.string,
        name: "Website Domain",
        key: SettingKey.WEBSITE_DOMAIN,
        value: `http://dc8.io/`,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.string,
        name: "API Domain",
        key: SettingKey.API_DOMAIN,
        value: `https://core.dc8.io/`,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.string,
        name: "Media Domain",
        key: SettingKey.MEDIA_DOMAIN,
        value: `https://core.dc8.io/`,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.string,
        name: "Logo url",
        key: SettingKey.LOGO_URL,
        value: `/images/logo.png`,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.boolean,
        name: "Maintenance",
        key: SettingKey.MAINTENANCE,
        value: false,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
    ],
  },
  {
    slug: SettingGroupSlug.WEBSITE_SETTING,
    name: "Website setting",
    desc: "Website setting here",
    icon: "far fa-tachometer-alt",
    readOnly: false,
    settings: [
      {
        type: SettingType.boolean,
        name: "Use menu category",
        key: SettingKey.USE_MENU_CATEGORY,
        value: true,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.object,
        name: "Admin Menu",
        key: SettingKey.ADMIN_MENU,
        value: adminMenusData,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.object,
        name: "Editor Menu",
        key: SettingKey.EDITOR_MENU,
        value: editorMenuData,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
      {
        type: SettingType.object,
        name: "Menu CategoriesData",
        key: SettingKey.MENU_CATEGORIES,
        value: menuCategoriesData,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
    ],
  },
  {
    slug: SettingGroupSlug.NFT_SETTING,
    name: "NFT setting",
    desc: "NFT setting here",
    icon: "FcSettings",
    readOnly: true,
    settings: [
      {
        type: SettingType.boolean,
        name: "Allow sale",
        key: SettingKey.ALLOW_SALE,
        value: false,
        isActive: true,
        isPrivate: false,
        readOnly: true,
      },
      {
        type: SettingType.boolean,
        name: "Allow package",
        key: SettingKey.ALLOW_PKG,
        value: false,
        isActive: true,
        isPrivate: false,
        readOnly: true,
      },
      {
        type: SettingType.boolean,
        name: "Allow private sale",
        key: SettingKey.ALLOW_PRIVATE_SALE,
        value: false,
        isActive: true,
        isPrivate: false,
        readOnly: true,
      },
    ],
  },
  {
    slug: SettingGroupSlug.CUSTOMER_SETTING,
    name: "Customer setting",
    desc: "Customer setting here",
    icon: "FcSettings",
    readOnly: true,
    settings: [
      {
        type: SettingType.boolean,
        name: "Confirm ICP wallet Whitelist",
        key: SettingKey.CONFIRM_ICP_WALLET,
        value: false,
        isActive: true,
        isPrivate: false,
        readOnly: false,
      },
    ],
  },
];
