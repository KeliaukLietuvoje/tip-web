import {
  AiFillCaretUp,
  AiFillPicture,
  AiFillPlusCircle,
  AiOutlineLeft,
  AiOutlineMail,
  AiOutlineRight,
} from 'react-icons/ai';
import {
  BiCalendarEvent,
  BiCurrentLocation,
  BiMinusCircle,
  BiSearchAlt2,
  BiTrash,
  BiWater,
} from 'react-icons/bi';
import { BsLayersHalf, BsLink45Deg } from 'react-icons/bs';
import { CgMathMinus } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa';
import { FiClock, FiDownload, FiPhone, FiUser, FiUsers } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineArrowNarrowLeft, HiOutlineLocationMarker } from 'react-icons/hi';
import { IoIosArrowDown, IoMdCalendar } from 'react-icons/io';
import { IoCloseOutline } from 'react-icons/io5';
import {
  MdArrowBack,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdAttachFile,
  MdBusiness,
  MdDone,
  MdEmail,
  MdExitToApp,
  MdKeyboardArrowDown,
  MdList,
  MdMoreVert,
  MdOutlineEdit,
  MdOutlineFullscreen,
  MdOutlineFullscreenExit,
  MdOutlineInsertPhoto,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdSplitscreen,
  MdTune,
  MdUnfoldMore,
  MdViewModule,
} from 'react-icons/md';
import { RiArrowDownSLine, RiMap2Fill, RiTempColdLine } from 'react-icons/ri';
import { RxCopy } from 'react-icons/rx';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted, TiThMenu } from 'react-icons/ti';
import { VscVerified } from 'react-icons/vsc';
export interface IconProps {
  name: string;
  className?: string;
  color?: string;
  height?: string;
  width?: string;
  fun?: () => void;
}

export enum IconName {
  logo = `logo`,
  eGate = 'eGate',
  dropdownArrow = 'dropdownArrow',
  active = 'active',
  exit = 'exit',
  person = 'person',
  group = 'group',
  key = 'key',
  showMore = 'showMore',
  burger = 'burger',
  close = 'close',
  back = 'back',
  deleteItem = 'deleteItem',
  info = 'info',
}

const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case IconName.logo:
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x={0}
          y={0}
          viewBox="0 0 1083 505"
          className={className}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <g>
                <polygon
                  points="532.5,288.5 387.1,82.8 386.8,82.3 364.1,82.3 364.1,303.4 378.8,303.4 379.4,97 525.1,303 525.4,303.4 
             547.2,303.4 547.2,82.3 532.5,82.3 			"
                />
                <polygon points="581.7,96 657.5,96 657.5,303.4 672.2,303.4 672.2,96 748.2,96 748.2,82.3 581.7,82.3 			" />
                <rect x="787.1" y="82.3" width="14.7" height="221.1" />
                <path
                  d="M938,178.8c-42.6-4.1-62.4-18.6-62.4-45.8c0-24.3,24-41.3,58.5-41.3c31,0,55.3,19.7,63.5,51.3l0.3,1.1l15-4.8l-0.3-1
             c-9.6-36.6-40.4-60.3-78.5-60.3c-42.6,0-73.5,23-73.5,54.6c0,36.4,23.2,55.9,72.9,61.2c48.1,5,71.5,20.9,71.5,48.7
             c0,31.1-26.8,52-66.6,52c-40.4,0-70.4-26.5-78.2-69.2l-0.2-1.2l-15.2,4.1l0.2,1c8.8,48,45.5,79,93.4,79c49.6,0,81.6-25.9,81.6-66
             C1020,204.7,993.9,184.6,938,178.8z"
                />
              </g>
              <path
                d="M288.3,174.4v-27.2c0-0.2,0-0.3,0-0.5c-0.2-6.5-3.6-12.4-9.4-16.8l-82.3-61.4c-11.7-8.7-30-8.7-41.7,0l-82.3,61.4
           c-5.9,4.4-9.2,10.3-9.4,16.8c0,0.2,0,0.3,0,0.5v27.4c0,0.2,0,0.3,0,0.5c0,0.7,0.1,1.3,0.2,2c-0.1,0.7-0.2,1.3-0.2,2
           c0,0.2,0,0.3,0,0.5v27.4c0,0.2,0,0.3,0,0.5c0,0.7,0.1,1.3,0.2,2c-0.1,0.7-0.2,1.3-0.2,2c0,0.2,0,0.3,0,0.5v27.4c0,0.2,0,0.3,0,0.5
           c0.2,6.5,3.6,12.4,9.4,16.8l82.3,61.4c5.8,4.4,13.3,6.5,20.8,6.5s15-2.2,20.8-6.5l82.3-61.4c6-4.4,9.3-10.5,9.4-17.1l0,0
           c0-0.1,0-0.2,0-0.4v-27.2c0-0.2,0-0.3,0-0.5c0-0.7-0.1-1.3-0.2-1.9c0.1-0.8,0.2-1.5,0.2-2.3c0-0.1,0-0.3,0-0.4v-27.2
           c0-0.2,0-0.3,0-0.5c0-0.7-0.1-1.3-0.2-1.9c0.1-0.8,0.2-1.5,0.2-2.3C288.3,174.6,288.3,174.5,288.3,174.4z M277,193.2l0.6-0.4v0.8
           L277,193.2z M272.4,183.2l-4.4,3.3l-71.5-53.3c-11.7-8.7-30-8.7-41.7,0l-71.5,53.3l-4.4-3.3c-2.4-1.8-4-3.9-4.7-6.2
           c0.7-2.3,2.3-4.4,4.7-6.2l82.3-61.4c7.8-5.8,21-5.8,28.9,0l82.3,61.4c2.4,1.8,4,3.9,4.7,6.2C276.4,179.3,274.8,181.4,272.4,183.2z
            M259,193.2l-69,51.4c-7.8,5.8-21,5.8-28.9,0l-69-51.4l69-51.4c7.8-5.8,21-5.8,28.9,0L259,193.2z M73.8,192.8l0.6,0.4l-0.6,0.4
           V192.8z M78.9,203.2l4.4-3.3l71.5,53.3c5.8,4.4,13.3,6.5,20.8,6.5s15-2.2,20.8-6.5l71.5-53.3l4.4,3.3c2.4,1.8,4,3.9,4.7,6.2
           c-0.7,2.3-2.3,4.4-4.7,6.2l-82.3,61.4c-7.8,5.8-21,5.8-28.9,0l-82.3-61.4c-2.4-1.8-4-3.9-4.7-6.2
           C74.9,207.1,76.5,204.9,78.9,203.2z M73.8,147.3c0-3.2,1.9-6.3,5.1-8.7l82.3-61.4c7.8-5.8,21-5.8,28.9,0l82.3,61.4
           c3.3,2.4,5.1,5.5,5.1,8.7c0,0.1,0,0.2,0,0.3v13.7l-81.1-60.4c-11.7-8.7-30-8.7-41.7,0l-81.1,60.4v-13.7
           C73.8,147.5,73.8,147.4,73.8,147.3z M277.5,239.1c0,3.2-1.9,6.3-5.1,8.7l-82.3,61.4c-7.8,5.8-21,5.8-28.9,0l-82.3-61.4
           c-3.3-2.4-5.1-5.5-5.1-8.7c0-0.1,0-0.2,0-0.3v-13.7l81.1,60.4c5.8,4.4,13.3,6.5,20.8,6.5c7.5,0,15-2.2,20.8-6.5l81.1-60.4v13.7
           C277.5,238.9,277.5,239,277.5,239.1z"
              />
            </g>
            <g>
              <path d="M428.2,364.9V375h-25.8v68h-10.6v-68h-25.7v-10.2H428.2z" />
              <path d="M454.1,364.9V443h-10.6v-78.1H454.1z" />
              <path
                d="M508,364.9c15.2,0,24,9.7,24,22.9c0,13.4-8.7,23-24,23h-22.9V443h-10.6v-78.1H508z M521.4,387.8c0-7.7-4.8-12.7-13.8-12.7
           h-22.4v25.4h22.4C516.6,400.5,521.4,395.6,521.4,387.8z"
              />
            </g>
          </g>
        </svg>
      );
    case IconName.eGate:
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g id="Group_6068" data-name="Group 6068" transform="translate(-349.5 -473.5)">
            <path
              id="Path_2975"
              data-name="Path 2975"
              d="M365.876,473.5H351.124a1.624,1.624,0,0,0-1.624,1.624v14.752a1.624,1.624,0,0,0,1.624,1.624h.715v-8.064a6.661,6.661,0,0,1,6.661-6.661h0a6.661,6.661,0,0,1,6.661,6.661V491.5h.715a1.624,1.624,0,0,0,1.624-1.624V475.124A1.624,1.624,0,0,0,365.876,473.5Z"
              transform="translate(0 0)"
              fill="white"
            />
            <path
              id="Path_2976"
              data-name="Path 2976"
              d="M386.98,529.746c-.8.366.412-1.146-.262-.907-.011-.077.122-.252.2-.136.115.016,0-.147-.087-.1-.737-.276-1.219-1-1.838-1.46.04-.25-.94-.053-1.251-.254-.077-.1-.422-1.092-.426-.7-.5-.1-.641.812-1.07.366-.5.27-.477.071-.924-.1-.12-.082-.448.138-.32-.041.022-.1-.153.013-.285-.039-.224.287-.548-.19-.861-.015-.3.605-.289-.29-.532-.177-.542.475-1.26-.357-1.959.11-2.692.459-1.638,2.136-1.535,3.648-.057.243.174-.084.253-.018.053.259.94.714,1.213.711.193-.116.069.427.324.12a1.353,1.353,0,0,1,.693.016c.527-.279.107.314.6.365.4.31.189.567-.109.874-.011.649-.245,1.018.474,1.014.183-.041.065.094.2.106s-.106.207.236.169c1.148.256.4,1.668,1.382,1.243.051.08.2.028.292-.049.51.233.451-.322.791.178.517.062.426-.3.868-.357.148.277.467.031.213-.358.194-.033.043-.038.1-.129.318-.065.172-.092.4.062.445-.064.3-.442.444-.473.351.183.374-.2.584-.111-.043.093.332.262.032.212-.176.422.8.5.526-.223-.21.1,0-.076-.149-.119-.516.244-.276-.151-.173-.373-.051-.364.149-.263.269-.47,0-.2-.211-.615,0-.752.222-.975.831-.051,1-1.125.044-.241.417.141.414-.078.2-.079.39.343.374-.153C387.255,529.909,387.735,529.873,386.98,529.746Z"
              transform="translate(-22.714 -44.877)"
              fill="white"
            />
          </g>
        </svg>
      );
    case 'temp':
      return <RiTempColdLine className={className} />;
    case IconName.key:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.24996 17.5C8.78126 17.5 10.8333 15.448 10.8333 12.9166C10.8333 10.3853 8.78126 8.33331 6.24996 8.33331C3.71865 8.33331 1.66663 10.3853 1.66663 12.9166C1.66663 15.448 3.71865 17.5 6.24996 17.5Z"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 1.66669L9.5 9.66669"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.9166 6.24998L15.4166 8.74998L18.3333 5.83331L15.8333 3.33331"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'layer':
      return <BsLayersHalf className={className} />;
    case IconName.info:
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z"
            stroke="#535D6C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 5.25V6.75"
            stroke="#535D6C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 9.75H9.0075"
            stroke="#535D6C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'location':
      return <HiOutlineLocationMarker className={className} />;
    case 'date':
      return <BiCalendarEvent className={className} />;
    case 'water':
      return <BiWater className={className} />;
    case 'verified':
      return <VscVerified className={className} />;
    case 'minus':
      return <CgMathMinus className={className} />;
    case 'search':
      return <BiSearchAlt2 className={className} />;
    case 'filter':
      return <MdTune className={className} />;
    case 'delete':
      return <BiMinusCircle className={className} />;
    case 'calendar':
      return <IoMdCalendar className={className} />;
    case 'arrowDown':
      return <RiArrowDownSLine className={className} />;
    case 'arrowUp':
      return <AiFillCaretUp className={className} />;
    case 'close':
      return <IoCloseOutline className={className} />;
    case 'map':
      return <RiMap2Fill className={className} />;
    case 'current':
      return <BiCurrentLocation className={className} />;
    case IconName.back:
      return <MdArrowBack className={className} />;
    case 'backMobile':
      return <MdArrowBack className={className} />;
    case 'phone':
      return <FiPhone className={className} />;
    case 'email':
      return <MdEmail className={className} />;
    case 'user':
      return <FiUser className={className} />;
    case 'users':
      return <FiUsers className={className} />;
    case 'modules':
      return <MdViewModule className={className} />;
    case 'time':
      return <FiClock className={className} />;
    case IconName.exit:
      return <MdExitToApp className={className} />;
    case 'company':
      return <MdBusiness className={className} />;
    case 'userEmail':
      return <AiOutlineMail className={className} />;
    case IconName.dropdownArrow:
      return <MdKeyboardArrowDown className={className} />;
    case 'connect':
      return <BsLink45Deg className={className} />;
    case 'add':
      return <AiFillPlusCircle className={className} />;
    case 'more':
      return <MdMoreVert className={className} />;
    case 'menu':
      return <TiThMenu className={className} />;
    case 'down':
      return <IoIosArrowDown className={className} />;
    case 'attachment':
      return <MdAttachFile className={className} />;
    case IconName.active:
      return <MdDone className={className} />;
    case 'list':
      return <MdList className={className} />;
    case 'unsorted':
      return <TiArrowUnsorted className={className} />;
    case 'sortedUp':
      return <TiArrowSortedUp className={className} />;
    case 'sortedDown':
      return <TiArrowSortedDown className={className} />;
    case 'burger':
      return <GiHamburgerMenu className={className} />;
    case 'forward':
      return <MdArrowForwardIos className={className} />;
    case 'backward':
      return <MdArrowBackIos className={className} />;
    case 'visibleOn':
      return <MdOutlineVisibility className={className} />;
    case 'visibleOff':
      return <MdOutlineVisibilityOff className={className} />;
    case 'returnArrow':
      return <HiOutlineArrowNarrowLeft className={className} />;
    case 'padalintas':
      return <MdSplitscreen className={className} />;
    case 'download':
      return <FiDownload className={className} />;
    case 'picture':
      return <AiFillPicture className={className} />;
    case 'edit':
      return <MdOutlineEdit className={className} />;
    case IconName.group:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99996 12.5H4.99996C4.1159 12.5 3.26806 12.8512 2.64294 13.4763C2.01782 14.1014 1.66663 14.9493 1.66663 15.8333V17.5"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.49996 9.16667C9.34091 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34091 2.5 7.49996 2.5C5.65901 2.5 4.16663 3.99238 4.16663 5.83333C4.16663 7.67428 5.65901 9.16667 7.49996 9.16667Z"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3334 17.5V15.8333C18.3328 15.0948 18.087 14.3773 17.6345 13.7936C17.182 13.2099 16.5485 12.793 15.8334 12.6083"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.3334 2.60834C14.0504 2.79192 14.6859 3.20892 15.1397 3.7936C15.5936 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57765 15.5936 7.29674 15.1397 7.88141C14.6859 8.46609 14.0504 8.88309 13.3334 9.06667"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'photo':
      return <MdOutlineInsertPhoto className={className} />;
    case 'copy':
      return <RxCopy className={className} />;
    case 'trash':
      return <BiTrash className={className} />;
    case IconName.person:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49996C6.6159 12.5 5.76806 12.8512 5.14294 13.4763C4.51782 14.1014 4.16663 14.9493 4.16663 15.8333V17.5"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99996 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99996 2.5C8.15901 2.5 6.66663 3.99238 6.66663 5.83333C6.66663 7.67428 8.15901 9.16667 9.99996 9.16667Z"
            stroke="#697281"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case 'showMore':
      return <MdUnfoldMore className={className} />;
    case 'remove':
      return <FaTrash className={className} />;
    case 'leftArrow':
      return <AiOutlineLeft className={className} />;
    case 'rightArrow':
      return <AiOutlineRight className={className} />;
    case IconName.deleteItem:
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 4.5H15.75"
            stroke="#FE1D42"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5"
            stroke="#FE1D42"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5"
            stroke="#FE1D42"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 8.25V12.75"
            stroke="#FE1D42"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.5 8.25V12.75"
            stroke="#FE1D42"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    case 'fullscreen':
      return <MdOutlineFullscreen className={className} />;
    case 'exitFullScreen':
      return <MdOutlineFullscreenExit className={className} />;

    default:
      return null;
  }
};

export default Icon;
