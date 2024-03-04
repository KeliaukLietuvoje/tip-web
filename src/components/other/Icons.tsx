import {
  AiFillCaretUp,
  AiFillPicture,
  AiFillPlusCircle,
  AiOutlineEye,
  AiOutlineLeft,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineWarning,
} from 'react-icons/ai';
import {
  BiCalendarEvent,
  BiCurrentLocation,
  BiInfoCircle,
  BiMinusCircle,
  BiSearchAlt2,
  BiTrash,
  BiWater,
} from 'react-icons/bi';
import { BsLayersHalf, BsLink45Deg } from 'react-icons/bs';
import { CgMathMinus } from 'react-icons/cg';
import { FaKey, FaTrash } from 'react-icons/fa';
import { FiClock, FiDownload, FiPhone, FiUser, FiUsers } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineArrowNarrowLeft, HiOutlineLocationMarker } from 'react-icons/hi';
import { IoIosArrowDown, IoMdCalendar } from 'react-icons/io';
import { IoCloseOutline, IoLocationSharp } from 'react-icons/io5';
import {
  MdArrowBack,
  MdArrowBackIos,
  MdArrowForwardIos,
  MdAttachFile,
  MdBusiness,
  MdDone,
  MdEmail,
  MdExitToApp,
  MdGroups,
  MdKeyboardArrowDown,
  MdList,
  MdMoreVert,
  MdOutlineAddCircle,
  MdOutlineDelete,
  MdOutlineEdit,
  MdOutlineFullscreen,
  MdOutlineFullscreenExit,
  MdOutlineInsertPhoto,
  MdOutlineNorthEast,
  MdOutlinePerson,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdSettings,
  MdSplitscreen,
  MdTune,
  MdUnfoldMore,
  MdViewModule,
} from 'react-icons/md';
import { RiArrowDownSFill, RiArrowDownSLine, RiMap2Fill, RiTempColdLine } from 'react-icons/ri';
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

const Icon = ({ name, className, height, width, color }: IconProps) => {
  switch (name) {
    case 'logo':
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
    case 'eGate':
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
    case 'key':
      return <FaKey className={className} />;
    case 'layer':
      return <BsLayersHalf className={className} />;
    case 'miniArrowDown':
      return <RiArrowDownSFill className={className} />;
    case 'info':
      return <BiInfoCircle className={className} />;
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
    case 'Searchlocation':
      return <GoLocation className={className} />;
    case 'MapLocation':
      return <IoLocationSharp className={className} />;
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
    case 'back':
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
    case 'exit':
      return <MdExitToApp className={className} />;
    case 'company':
      return <MdBusiness className={className} />;
    case 'userEmail':
      return <AiOutlineMail className={className} />;
    case 'dropdownArrow':
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
    case 'active':
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
    case 'group':
      return <MdGroups className={className} />;
    case 'photo':
      return <MdOutlineInsertPhoto className={className} />;
    case 'copy':
      return <RxCopy className={className} />;
    case 'trash':
      return <BiTrash className={className} />;
    case 'person':
      return <MdOutlinePerson className={className} />;
    case 'showMore':
      return <MdUnfoldMore className={className} />;
    case 'remove':
      return <FaTrash className={className} />;
    case 'leftArrow':
      return <AiOutlineLeft className={className} />;
    case 'rightArrow':
      return <AiOutlineRight className={className} />;
    case 'deleteItem':
      return <MdOutlineDelete className={className} />;
    case 'eye':
      return <AiOutlineEye className={className} />;
    case 'northEast':
      return <MdOutlineNorthEast className={className} />;
    case 'settings':
      return <MdSettings className={className} />;
    case 'fullscreen':
      return <MdOutlineFullscreen className={className} />;
    case 'exitFullScreen':
      return <MdOutlineFullscreenExit className={className} />;
    case 'plus':
      return <AiOutlinePlus className={className} />;
    case 'warning':
      return <AiOutlineWarning className={className} />;
    case 'addCircle':
      return <MdOutlineAddCircle className={className} />;
    case 'lock':
      return <AiOutlineLock className={className} />;
    case 'min':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.425 44.5"
        >
          <g id="Group_7362" data-name="Group 7362" transform="translate(0 -34.55)">
            <path
              id="Path_3222"
              data-name="Path 3222"
              d="M11.706,171.084a10.814,10.814,0,0,1-7.111-18.368.752.752,0,0,0-1.073-1.053,12.317,12.317,0,0,0,8.1,20.921h.042a.752.752,0,0,0,.041-1.5Z"
              transform="translate(0 -105.174)"
              fill={color}
            />
            <path
              id="Path_3223"
              data-name="Path 3223"
              d="M100.586,56.656a.356.356,0,0,1-.173-.5A8.564,8.564,0,0,0,90.557,43.84a.323.323,0,0,1-.25-.032.371.371,0,0,1-.175-.228,12.214,12.214,0,0,0-23.3-.9.349.349,0,0,1-.369.231A12.368,12.368,0,0,0,58.788,44.4a.752.752,0,0,0,.742,1.307,10.834,10.834,0,0,1,5.244-1.4,11,11,0,0,1,1.494.09,1.859,1.859,0,0,0,1.98-1.219,10.711,10.711,0,0,1,20.434.79,1.888,1.888,0,0,0,.885,1.145,1.815,1.815,0,0,0,1.4.172,7.061,7.061,0,0,1,8.126,10.153,1.86,1.86,0,0,0,.9,2.6,4.117,4.117,0,0,1,2.485,3.737,4.039,4.039,0,0,1-1.193,2.894,4.256,4.256,0,0,1-3,1.26H92.314a.752.752,0,0,0,0,1.5h5.968a5.768,5.768,0,0,0,4.069-1.705,5.531,5.531,0,0,0,1.628-3.966A5.622,5.622,0,0,0,100.586,56.656Z"
              transform="translate(-52.554)"
              fill={color}
            />
            <path
              id="Path_3224"
              data-name="Path 3224"
              d="M160.3,179.926v-2.555a9.508,9.508,0,0,0-1.012-4.294.752.752,0,0,0-1.344.673,8.017,8.017,0,0,1,.853,3.621v2.536h-2.3v-2.536a5.8,5.8,0,0,0-11.593,0v2.536h-2.3v-2.536a8.1,8.1,0,0,1,13.585-5.962.752.752,0,0,0,1.018-1.106,9.6,9.6,0,0,0-16.107,7.068v2.555A2.493,2.493,0,0,0,138.9,182.4v12.719a3.8,3.8,0,0,0,3.8,3.8h15.986a3.8,3.8,0,0,0,3.8-3.8v-1.6a.752.752,0,1,0-1.5,0v1.6a2.3,2.3,0,0,1-2.3,2.3H142.7a2.3,2.3,0,0,1-2.3-2.3V182.4a.988.988,0,0,1,.987-.987H160a.988.988,0,0,1,.987.987v7.912a.752.752,0,0,0,1.5,0V182.4A2.493,2.493,0,0,0,160.3,179.926Zm-13.9-2.555a4.293,4.293,0,0,1,8.586,0v2.536H146.4Z"
              transform="translate(-124.98 -119.866)"
              fill={color}
            />
            <path
              id="Path_3225"
              data-name="Path 3225"
              d="M224.73,341.476a1.532,1.532,0,0,0,1.232.625h3.351a1.527,1.527,0,0,0,1.456-1.988l-.647-2.042a3.184,3.184,0,1,0-4.97,0l-.647,2.042A1.533,1.533,0,0,0,224.73,341.476Zm1.209-.91.663-2.093a1.41,1.41,0,0,0-.262-1.325,1.68,1.68,0,0,1,1.3-2.747q.054,0,.109,0a1.7,1.7,0,0,1,1.569,1.574,1.679,1.679,0,0,1-.38,1.171,1.407,1.407,0,0,0-.261,1.324l.663,2.094a.024.024,0,0,1-.023.031h-3.351a.02.02,0,0,1-.019-.01A.019.019,0,0,1,225.939,340.566Z"
              transform="translate(-201.944 -268.449)"
              fill={color}
            />
          </g>
        </svg>
      );

    case 'max':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.42 51.388"
        >
          <g id="Group_7370" data-name="Group 7370" transform="translate(0 -0.16)">
            <path
              id="Path_3232"
              data-name="Path 3232"
              d="M50.643,112.24h0a.752.752,0,0,0-.752.751l0,1.843H8.46a.752.752,0,0,0,0,1.5H49.885l0,1.534a3.355,3.355,0,0,1-3.349,3.337H4.854A3.353,3.353,0,0,1,1.5,117.862V116.34H5.253a.752.752,0,0,0,0-1.5H1.5V95.075a3.353,3.353,0,0,1,3.349-3.349.752.752,0,0,0,0-1.5A4.859,4.859,0,0,0,0,95.075v22.787a4.859,4.859,0,0,0,4.854,4.854H18.83v5.3l-2.464,3.053h-1.06a.752.752,0,1,0,0,1.5H36.028a.752.752,0,1,0,0-1.5h-.974l-2.464-3.053v-5.3H46.534a4.863,4.863,0,0,0,4.854-4.838l.007-4.884a.752.752,0,0,0-.751-.754ZM31.086,127.529H28.425a.752.752,0,0,0,0,1.5h3.054l1.642,2.035H18.3l1.642-2.035h5.1a.752.752,0,0,0,0-1.5h-4.7v-4.814H31.086Z"
              transform="translate(0 -81.026)"
              fill={color}
            />
            <path
              id="Path_3233"
              data-name="Path 3233"
              d="M118.435,30.279h-7.4c-5.544-5.493-10.314-6.684-13.4-6.684s-7.86,1.191-13.4,6.684H80.634a.752.752,0,1,0,0,1.5h2.205a5.517,5.517,0,0,0,.442,7.007c5.945,6.325,11.084,7.653,14.347,7.653a16.957,16.957,0,0,0,9.938-3.715.752.752,0,1,0-.889-1.214,15.5,15.5,0,0,1-9.05,3.424c-2.967,0-7.674-1.245-13.251-7.179a4.009,4.009,0,0,1,0-5.482q.238-.253.474-.495h4.519a8.876,8.876,0,0,0,3.48,10.7.752.752,0,0,0,.812-1.267,7.365,7.365,0,0,1-2.649-9.436H92.75a5.856,5.856,0,1,0,9.756,0h1.736a7.365,7.365,0,0,1-2.649,9.436.752.752,0,1,0,.812,1.267,8.876,8.876,0,0,0,3.48-10.7h4.519q.236.242.474.495a4.009,4.009,0,0,1,0,5.482c-.581.619-1.183,1.213-1.789,1.768a.752.752,0,0,0,1.017,1.11c.633-.58,1.262-1.2,1.868-1.847a5.517,5.517,0,0,0,.442-7.007h6.017a3.352,3.352,0,0,1,3.349,3.348l-.021,14.712a.752.752,0,0,0,.751.754h0a.752.752,0,0,0,.752-.751l.021-14.713a4.859,4.859,0,0,0-4.853-4.854ZM101.98,35.019a4.352,4.352,0,1,1-7.257-3.236h5.812A4.341,4.341,0,0,1,101.98,35.019Zm.426-7.467a.752.752,0,0,0-.812,1.267,7.422,7.422,0,0,1,1.666,1.46h-2.2a5.838,5.838,0,0,0-6.865,0H92a7.42,7.42,0,0,1,1.666-1.46.752.752,0,1,0-.812-1.267,8.893,8.893,0,0,0-2.718,2.727h-3.72C91.1,26.055,95.03,25.1,97.629,25.1s6.532.956,11.216,5.179h-3.72a8.9,8.9,0,0,0-2.719-2.727Z"
              transform="translate(-71.868 -21.084)"
              fill={color}
            />
            <path
              id="Path_3234"
              data-name="Path 3234"
              d="M250.282,363.933v-.63a.752.752,0,1,0-1.5,0v.63a.752.752,0,0,0,1.5,0Z"
              transform="translate(-223.819 -326.035)"
              fill={color}
            />
            <path
              id="Path_3235"
              data-name="Path 3235"
              d="M339.089,1.665h3.336V5a.752.752,0,0,0,1.5,0V.912a.752.752,0,0,0-.752-.752h-4.089a.752.752,0,1,0,0,1.5Z"
              transform="translate(-304.395)"
              fill={color}
            />
            <path
              id="Path_3236"
              data-name="Path 3236"
              d="M343.178,224.628a.752.752,0,0,0,.752-.752v-4.089a.752.752,0,0,0-1.5,0v3.336h-3.336a.752.752,0,0,0,0,1.5Z"
              transform="translate(-304.395 -196.917)"
              fill={color}
            />
            <path
              id="Path_3237"
              data-name="Path 3237"
              d="M120.215,219.034a.752.752,0,0,0-.752.752v4.088a.752.752,0,0,0,.752.752H124.3a.752.752,0,0,0,0-1.5h-3.336v-3.336A.752.752,0,0,0,120.215,219.034Z"
              transform="translate(-107.478 -196.916)"
              fill={color}
            />
            <path
              id="Path_3238"
              data-name="Path 3238"
              d="M120.215,5.753A.752.752,0,0,0,120.968,5V1.665H124.3a.752.752,0,1,0,0-1.5h-4.088a.752.752,0,0,0-.752.752V5A.752.752,0,0,0,120.215,5.753Z"
              transform="translate(-107.478)"
              fill={color}
            />
          </g>
        </svg>
      );

    case 'medium':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || `51.425`}
          height={height || `44.5`}
          viewBox="0 0 51.42 50.296"
        >
          <g id="Group_7369" data-name="Group 7369" transform="translate(0 -5.591)">
            <path
              id="Path_3229"
              data-name="Path 3229"
              d="M48.3,243.429H46.213a.754.754,0,0,0,0,1.508H48.3a1.611,1.611,0,0,1,1.609,1.609v4.784H37.588v-6.393H43a.754.754,0,0,0,0-1.508H3.116A3.12,3.12,0,0,0,0,246.545v20.16a3.12,3.12,0,0,0,3.116,3.116H48.3a3.12,3.12,0,0,0,3.116-3.116v-20.16a3.12,3.12,0,0,0-3.116-3.116Zm1.609,16.984H42.949v-7.576h6.964Zm-23.5,0v-7.576H41.441v7.576Zm-1.508-7.576v7.576H9.878v-7.576Zm11.174,9.083v6.393H15.339v-6.393Zm0-10.591H15.339v-6.393H36.08ZM3.116,244.936H13.832v6.393H1.508v-4.784a1.611,1.611,0,0,1,1.609-1.609ZM1.508,266.705v-4.784H3.668a.754.754,0,1,0,0-1.508H1.508v-7.576H8.371v7.576H6.88a.754.754,0,1,0,0,1.508h6.951v6.393H3.116a1.611,1.611,0,0,1-1.609-1.609Zm46.8,1.609H37.588v-6.393H49.912v4.784A1.611,1.611,0,0,1,48.3,268.314Z"
              transform="translate(0 -213.934)"
              fill={color}
            />
            <path
              id="Path_3230"
              data-name="Path 3230"
              d="M361.542,113.724l-.218.281a.754.754,0,1,0,1.192.923l.218-.281a9.244,9.244,0,0,0-.7-12.089.754.754,0,0,0-1.076,1.056A7.731,7.731,0,0,1,361.542,113.724Z"
              transform="translate(-324.486 -87.017)"
              fill={color}
            />
            <path
              id="Path_3231"
              data-name="Path 3231"
              d="M111.937,27.577a.754.754,0,0,0,.742.626.762.762,0,0,0,.129-.011.754.754,0,0,0,.615-.871l-.453-2.627a6.223,6.223,0,0,1,2.2-5.856l1.339,2.576a2.748,2.748,0,0,0,5.156-1.672l-.283-1.9a9.37,9.37,0,0,1,1.118-5.986,9.268,9.268,0,0,1,4.291-3.9l1.8-.809-.052.782a5.02,5.02,0,0,0,2.188,4.477l3.407,2.306a.754.754,0,1,0,.845-1.249l-3.407-2.306a3.508,3.508,0,0,1-1.529-3.128l.061-.907a1.432,1.432,0,0,0-2.015-1.4l-1.919.861a10.766,10.766,0,0,0-4.985,4.531,10.884,10.884,0,0,0-1.3,6.953l.283,1.9a1.24,1.24,0,0,1-2.327.755l-1.51-2.906a1.195,1.195,0,0,0-1.757-.42,7.735,7.735,0,0,0-3.1,7.557Z"
              transform="translate(-100.181 0)"
              fill={color}
            />
          </g>
        </svg>
      );
    case 'rejected':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 0 24 24"
          fill="#FFFF"
        ></svg>
      );

    case 'returned':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16px"
          width="16px"
          viewBox="0 0 24 24"
          fill="#FFFF"
        ></svg>
      );

    case 'linked':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"></svg>
      );

    case 'late':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"></svg>
      );

    case 'new':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"></svg>
      );

    case 'level0':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 32">
          <g id="Group_7398" data-name="Group 7398" transform="translate(-815 -430)">
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case 'level1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 32">
          <g id="Group_7398" data-name="Group 7398" transform="translate(-815 -430)">
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#ff9a3e"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#e73f76"
            />
          </g>
        </svg>
      );
    case 'level2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 32">
          <g id="Group_7398" data-name="Group 7398" transform="translate(-815 -430)">
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#ff9a3e"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case 'level3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 32">
          <g id="Group_7398" data-name="Group 7398" transform="translate(-815 -430)">
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#83ca6a"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case 'level4':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 32">
          <g id="Group_7398" data-name="Group 7398" transform="translate(-815 -430)">
            <rect
              id="Rectangle_2864"
              data-name="Rectangle 2864"
              width="8"
              height="4"
              transform="translate(815 462) rotate(-90)"
              fill="#14a166"
            />
            <rect
              id="Rectangle_2865"
              data-name="Rectangle 2865"
              width="17"
              height="4"
              transform="translate(822.334 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2866"
              data-name="Rectangle 2866"
              width="23"
              height="4"
              transform="translate(829.667 462) rotate(-90)"
              fill="#f1f1f4"
            />
            <rect
              id="Rectangle_2867"
              data-name="Rectangle 2867"
              width="32"
              height="4"
              transform="translate(837 462) rotate(-90)"
              fill="#f1f1f4"
            />
          </g>
        </svg>
      );
    case 'line0':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 220 120">
          <path
            id="line"
            d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
            transform="translate(-90 -90)"
            fill="#f1f1f4"
          />
        </svg>
      );

    case 'line1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 220 120">
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210a10,10,0,0,1-10-9.942,110.745,110.745,0,0,1,31.9-78.1,10,10,0,1,1,14.2,14.084,90.609,90.609,0,0,0-26.1,63.9A10,10,0,0,1,100.058,210Z"
                transform="translate(5186.001 2643.5)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g id="Group_7399" data-name="Group 7399" transform="translate(-5276 -2734)">
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5186 2644)"
              fill="#f1f1f4"
            />
            <g id="Mask_Group_1" data-name="Mask Group 1" clip-path="url(#clip-path)">
              <rect
                id="Rectangle_3471"
                data-name="Rectangle 3471"
                width="220"
                height="120"
                transform="translate(5276 2734)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    case 'line2':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220.5"
          height="120.5"
          viewBox="0 0 220.5 120.5"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210a10,10,0,0,1-10-10A110.125,110.125,0,0,1,200,90a10,10,0,0,1,0,20,90.1,90.1,0,0,0-90,90A10,10,0,0,1,100,210Z"
                transform="translate(5430.5 2643.5)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g id="Group_7400" data-name="Group 7400" transform="translate(-5520.5 -2733.5)">
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5431 2644)"
              fill="#f1f1f4"
            />
            <g id="Mask_Group_2" data-name="Mask Group 2" clip-path="url(#clip-path)">
              <rect
                id="Rectangle_3472"
                data-name="Rectangle 3472"
                width="220"
                height="120"
                transform="translate(5521 2734)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    case 'line3':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="120.271"
          viewBox="0 0 220 120.271"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M100,210h-.024A10,10,0,0,1,90,199.976a110,110,0,0,1,200.2-62.7,10,10,0,0,1-16.4,11.447,90,90,0,0,0-163.8,51.3A10,10,0,0,1,100,210Z"
                transform="translate(5677 2638.271)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g id="Group_7401" data-name="Group 7401" transform="translate(-5767 -2728)">
            <path
              id="line-2"
              data-name="line"
              d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
              transform="translate(5677 2638)"
              fill="#f1f1f4"
            />
            <g id="Mask_Group_3" data-name="Mask Group 3" clip-path="url(#clip-path)">
              <rect
                id="Rectangle_3473"
                data-name="Rectangle 3473"
                width="220"
                height="120"
                transform="translate(5767 2728)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );
    case 'line4':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 220 120">
          <defs>
            <clipPath id="clip-path">
              <path
                id="line"
                d="M300,210a10,10,0,0,1-10-10,90,90,0,0,0-180,0,10,10,0,0,1-20,0,110,110,0,0,1,220,0A10,10,0,0,1,300,210Z"
                transform="translate(5941 2638)"
                fill="#404162"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              y1="0.551"
              x2="1"
              y2="0.537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#12a166" />
              <stop offset="0.286" stop-color="#83ca6a" />
              <stop offset="0.689" stop-color="#ff9a3e" />
              <stop offset="1" stop-color="#e73f76" />
            </linearGradient>
          </defs>
          <g id="Group_7402" data-name="Group 7402" transform="translate(-6031 -2728)">
            <g id="Mask_Group_4" data-name="Mask Group 4" clip-path="url(#clip-path)">
              <rect
                id="Rectangle_3474"
                data-name="Rectangle 3474"
                width="220"
                height="120"
                transform="translate(6031 2728)"
                fill="url(#linear-gradient)"
              />
            </g>
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
