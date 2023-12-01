import * as React from 'react'

interface VectorProps
  extends React.SVGAttributes<SVGSVGElement> {
  className?: string
}

const NicolasVector = React.forwardRef<SVGSVGElement, VectorProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        width="752"
        height="750"
        viewBox="0 0 752 750"
        fill="none"
        {...props}
      >
        <path d="M570.119 447.946L748.838 626.725C750.683 628.57 750.683 631.522 748.838 633.182L634.303 747.755C632.459 749.6 629.508 749.6 627.848 747.755L213.235 333.004C210.284 330.052 205.304 332.081 205.304 336.325V712.147C205.304 714.73 203.275 716.76 200.693 716.76H8.14163C5.92839 716.76 4.08403 715.284 3.71515 713.254L1.13304 702.369C0.764172 700.708 1.13304 699.048 2.60854 697.941C9.80156 691.483 34.3316 667.868 34.3316 643.145V379.497C34.3316 376.914 36.3604 374.885 38.9425 374.885H68.0835C130.792 374.885 164.913 342.967 183.541 307.728C184.463 305.883 184.094 303.669 182.618 302.377L3.53072 123.414C1.68635 121.569 1.68635 118.617 3.53072 116.957L118.066 2.38373C119.91 0.538755 122.861 0.538755 124.521 2.38373L539.318 417.32C542.269 420.272 547.249 418.242 547.249 413.999V37.6228C547.249 35.0399 549.278 33.0104 551.86 33.0104H743.858C746.072 33.0104 747.916 34.4864 748.285 36.5158L750.867 47.9547C751.236 49.6152 750.867 51.2757 749.392 52.3827C742.014 58.8401 717.853 81.9023 717.853 107.179V370.273C717.853 372.856 715.824 374.885 713.242 374.885H684.839C622.13 374.885 588.01 407.357 569.382 442.596C568.459 444.441 568.828 446.655 570.304 447.946H570.119Z" stroke="url(#paint0_linear_41_2467)" strokeWidth="0.5" strokeMiterlimit="10" />
        <defs>
          <linearGradient id="paint0_linear_41_2467" x1="375.908" y1="-1.30622" x2="375.908" y2="751.445" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F4F4F4" />
            <stop offset="0.08" stopColor="#F4F4F4" stopOpacity="0.96" />
            <stop offset="0.22" stopColor="#F4F4F4" stopOpacity="0.84" />
            <stop offset="0.4" stopColor="#F4F4F4" stopOpacity="0.65" />
            <stop offset="0.62" stopColor="#F4F4F4" stopOpacity="0.39" />
            <stop offset="0.86" stopColor="#F4F4F4" stopOpacity="0.07" />
            <stop offset="0.91" stopColor="#F4F4F4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    )
  })

NicolasVector.displayName = 'NicolasVector'

function NicoSymbol ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" {...props}>
      <path d="M75.8826 59.4237L99.7118 83.0712C99.9577 83.3152 99.9577 83.7057 99.7118 83.9253L84.4404 99.0802C84.1945 99.3243 83.801 99.3243 83.5797 99.0802L28.298 44.22C27.9045 43.8295 27.2406 44.098 27.2406 44.6593V94.3703C27.2406 94.7119 26.97 94.9804 26.6258 94.9804H0.952217C0.657119 94.9804 0.411204 94.7851 0.362021 94.5167L0.0177393 93.0769C-0.0314437 92.8572 0.0177393 92.6376 0.214471 92.4912C1.17354 91.637 4.44421 88.5133 4.44421 85.2432V50.3698C4.44421 50.0281 4.71472 49.7597 5.059 49.7597H8.94446C17.3056 49.7597 21.855 45.5378 24.3388 40.8766C24.4617 40.6326 24.4125 40.3397 24.2158 40.1689L0.337429 16.497C0.0915139 16.253 0.0915139 15.8625 0.337429 15.6429L15.6088 0.487962C15.8547 0.243922 16.2481 0.243922 16.4695 0.487962L71.7758 55.3726C72.1693 55.7631 72.8332 55.4947 72.8332 54.9334V5.14913C72.8332 4.80748 73.1037 4.53903 73.448 4.53903H99.0478C99.3429 4.53903 99.5888 4.73426 99.638 5.00271L99.9823 6.51576C100.031 6.73539 99.9823 6.95503 99.7855 7.10145C98.8019 7.9556 95.5804 11.0061 95.5804 14.3495V49.1496C95.5804 49.4913 95.3099 49.7597 94.9656 49.7597H91.1785C82.8174 49.7597 78.268 54.0548 75.7842 58.716C75.6613 58.96 75.7104 59.2529 75.9072 59.4237H75.8826Z" fill="url(#paint0_linear_96_5273)" />
      <defs>
        <linearGradient id="paint0_linear_96_5273" x1="50" y1="0.304932" x2="50" y2="99.2633" gradientUnits="userSpaceOnUse">
          <stop offset="0.4709" stopColor="#F7F7F7" />
          <stop offset="1" stopColor="#F7F7F7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  )
}

function NicoSymbolBlue ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="100" height="99" viewBox="0 0 100 99" fill="none" {...props}>
      <path d="M75.8826 59.1396L99.7118 82.7871C99.9577 83.0312 99.9577 83.4217 99.7118 83.6413L84.4404 98.7962C84.1945 99.0402 83.801 99.0402 83.5797 98.7962L28.298 43.9359C27.9045 43.5455 27.2406 43.8139 27.2406 44.3752V94.0862C27.2406 94.4279 26.97 94.6963 26.6258 94.6963H0.952217C0.657119 94.6963 0.411204 94.5011 0.362021 94.2326L0.0177393 92.7928C-0.0314437 92.5732 0.0177393 92.3535 0.214471 92.2071C1.17354 91.353 4.44421 88.2292 4.44421 84.9591V50.0857C4.44421 49.7441 4.71472 49.4756 5.059 49.4756H8.94446C17.3056 49.4756 21.855 45.2537 24.3388 40.5926C24.4617 40.3485 24.4125 40.0557 24.2158 39.8849L0.337429 16.2129C0.0915139 15.9689 0.0915139 15.5784 0.337429 15.3588L15.6088 0.203904C15.8547 -0.040136 16.2481 -0.040136 16.4695 0.203904L71.7758 55.0886C72.1693 55.479 72.8332 55.2106 72.8332 54.6493V4.86507C72.8332 4.52342 73.1037 4.25497 73.448 4.25497H99.0478C99.3429 4.25497 99.5888 4.45021 99.638 4.71865L99.9823 6.2317C100.031 6.45134 99.9823 6.67097 99.7855 6.8174C98.8019 7.67154 95.5804 10.722 95.5804 14.0654V48.8655C95.5804 49.2072 95.3099 49.4756 94.9656 49.4756H91.1785C82.8174 49.4756 78.268 53.7708 75.7842 58.4319C75.6613 58.676 75.7104 58.9688 75.9072 59.1396H75.8826Z" fill="url(#paint0_linear_41_2510)" />
      <defs>
        <linearGradient id="paint0_linear_41_2510" x1="50" y1="0.020874" x2="50" y2="98.9792" gradientUnits="userSpaceOnUse">
          <stop stopColor="#003F9C" />
          <stop offset="1" stopColor="#003F9C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function PinIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="19" height="23" viewBox="0 0 19 23" fill="none" {...props}>
      <path d="M17.3636 9.68182C17.3636 16.0455 9.18182 21.5 9.18182 21.5C9.18182 21.5 1 16.0455 1 9.68182C1 7.51187 1.86201 5.43079 3.3964 3.8964C4.93079 2.36201 7.01186 1.5 9.18182 1.5C11.3518 1.5 13.4328 2.36201 14.9672 3.8964C16.5016 5.43079 17.3636 7.51187 17.3636 9.68182Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.18174 12.4091C10.688 12.4091 11.909 11.188 11.909 9.68182C11.909 8.17559 10.688 6.95454 9.18174 6.95454C7.67551 6.95454 6.45447 8.17559 6.45447 9.68182C6.45447 11.188 7.67551 12.4091 9.18174 12.4091Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

function PlusCircleIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="22" height="23" viewBox="0 0 22 23" fill="none" {...props}>
      <path d="M11 21.2842C16.5228 21.2842 21 16.807 21 11.2842C21 5.76133 16.5228 1.28418 11 1.28418C5.47715 1.28418 1 5.76133 1 11.2842C1 16.807 5.47715 21.2842 11 21.2842Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7.28418V15.2842" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11.2842H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

function ArrowDownRight ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="132" height="133" viewBox="0 0 132 133" fill="none" {...props}>
      <path d="M1.00001 1.07593L131.208 131.284M131.208 131.284V1.07593M131.208 131.284H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function InboxIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="33" height="27" viewBox="0 0 33 27" fill="none" {...props}>
      <path d="M32.125 13.2842H22.75L19.625 17.9717H13.375L10.25 13.2842H0.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.26562 2.51855L0.875 13.2842V22.6592C0.875 23.488 1.20424 24.2828 1.79029 24.8689C2.37634 25.4549 3.1712 25.7842 4 25.7842H29C29.8288 25.7842 30.6237 25.4549 31.2097 24.8689C31.7958 24.2828 32.125 23.488 32.125 22.6592V13.2842L26.7344 2.51855C26.4757 1.99791 26.0768 1.55976 25.5827 1.25337C25.0887 0.946974 24.5189 0.784488 23.9375 0.78418H9.0625C8.48112 0.784488 7.91135 0.946974 7.41726 1.25337C6.92316 1.55976 6.52434 1.99791 6.26562 2.51855Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

function PhoneIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="27" height="27" viewBox="0 0 27 27" fill="none" {...props}>
      <path d="M25.9745 19.5015V23.265C25.9759 23.6144 25.9043 23.9602 25.7644 24.2803C25.6244 24.6004 25.4191 24.8878 25.1617 25.124C24.9042 25.3602 24.6003 25.54 24.2693 25.6519C23.9383 25.7639 23.5876 25.8054 23.2397 25.774C19.3793 25.3545 15.6712 24.0354 12.4133 21.9227C9.38221 19.9966 6.81237 17.4268 4.88629 14.3957C2.76615 11.1229 1.44674 7.39678 1.03496 3.51912C1.00361 3.17221 1.04484 2.82257 1.15602 2.49246C1.2672 2.16236 1.4459 1.85902 1.68074 1.60176C1.91558 1.3445 2.20141 1.13896 2.52003 0.998222C2.83866 0.857482 3.1831 0.784629 3.53142 0.784301H7.29493C7.90375 0.778309 8.49398 0.993902 8.9556 1.39089C9.41721 1.78789 9.71873 2.33919 9.80394 2.94205C9.96279 4.14645 10.2574 5.32902 10.6821 6.4672C10.8509 6.91622 10.8874 7.40421 10.7874 7.87335C10.6873 8.34249 10.4549 8.77311 10.1176 9.1142L8.52435 10.7074C10.3102 13.8481 12.9107 16.4486 16.0514 18.2344L17.6446 16.6412C17.9857 16.3039 18.4163 16.0715 18.8854 15.9714C19.3546 15.8714 19.8426 15.9079 20.2916 16.0767C21.4298 16.5014 22.6123 16.796 23.8167 16.9548C24.4261 17.0408 24.9827 17.3478 25.3805 17.8173C25.7784 18.2869 25.9897 18.8862 25.9745 19.5015Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

function InstagramIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="currentColor" {...props}>
      <path d="M8.04993 0.28418C4.03043 0.28418 0.759888 3.55665 0.759888 7.57715V17.9932C0.759888 22.0132 4.03236 25.2842 8.05286 25.2842H18.4689C22.4889 25.2842 25.7599 22.0117 25.7599 17.9912V7.57422C25.7599 3.55472 22.4874 0.28418 18.4669 0.28418H8.04993ZM20.7599 4.28418C21.3119 4.28418 21.7599 4.73218 21.7599 5.28418C21.7599 5.83618 21.3119 6.28418 20.7599 6.28418C20.2079 6.28418 19.7599 5.83618 19.7599 5.28418C19.7599 4.73218 20.2079 4.28418 20.7599 4.28418ZM13.2599 6.28418C16.8449 6.28418 19.7599 9.19918 19.7599 12.7842C19.7599 16.3692 16.8444 19.2842 13.2599 19.2842C9.67489 19.2842 6.75989 16.3687 6.75989 12.7842C6.75989 9.19968 9.67489 6.28418 13.2599 6.28418ZM13.2599 8.28418C10.7744 8.28418 8.75989 10.2987 8.75989 12.7842C8.75989 15.2697 10.7744 17.2842 13.2599 17.2842C15.7454 17.2842 17.7599 15.2697 17.7599 12.7842C17.7599 10.2987 15.7454 8.28418 13.2599 8.28418Z" fill="currentColor" />
    </svg>

  )
}

function LinkedInIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path d="M23.4872 0.28418H3.03261C1.77693 0.28418 0.759888 1.30123 0.759888 2.55691V23.0115C0.759888 24.2671 1.77693 25.2842 3.03261 25.2842H23.4872C24.7428 25.2842 25.7599 24.2671 25.7599 23.0115V2.55691C25.7599 1.30123 24.7428 0.28418 23.4872 0.28418ZM8.66216 20.7387H5.30989V9.95236H8.66216V20.7387ZM6.95193 8.41032C5.87125 8.41032 4.99739 7.53418 4.99739 6.45577C4.99739 5.37736 5.87239 4.50236 6.95193 4.50236C8.02921 4.50236 8.90534 5.3785 8.90534 6.45577C8.90534 7.53418 8.02921 8.41032 6.95193 8.41032ZM21.219 20.7387H17.869V15.4933C17.869 14.2421 17.8463 12.633 16.1269 12.633C14.3826 12.633 14.1144 13.9955 14.1144 15.4024V20.7387H10.7644V9.95236H13.9803V11.4262H14.0258C14.4735 10.5785 15.5667 9.68418 17.1974 9.68418C20.5917 9.68418 21.219 11.9183 21.219 14.8228V20.7387Z" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <path d="M22.7837 0.28418H3.73608C2.09322 0.28418 0.759888 1.61751 0.759888 3.26037V22.308C0.759888 23.9508 2.09322 25.2842 3.73608 25.2842H22.7837C24.4266 25.2842 25.7599 23.9508 25.7599 22.308V3.26037C25.7599 1.61751 24.4266 0.28418 22.7837 0.28418ZM20.4027 9.21275H19.2123C17.9385 9.21275 17.4266 9.51037 17.4266 10.4032V12.1889H20.4027L19.8075 15.1651H17.4266V24.0937H14.4504V15.1651H12.0694V12.1889H14.4504V10.4032C14.4504 8.02227 15.6408 6.23656 18.0218 6.23656C19.748 6.23656 20.4027 6.8318 20.4027 6.8318V9.21275Z" fill="currentColor" />
    </svg>

  )
}

function CrossHairIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
      <g id="&#240;&#159;&#166;&#134; icon &#34;crosshair&#34;">
        <path id="Vector" d="M14 26.5C20.9036 26.5 26.5 20.9036 26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M26.5 14H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_3" d="M6.5 14H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_4" d="M14 6.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_5" d="M14 26.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  )
}

function UserCheckIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="34" height="27" viewBox="0 0 34 27" fill="none" {...props}>
      <g id="&#240;&#159;&#166;&#134; icon &#34;user check&#34;">
        <path id="Vector" d="M22.5556 26V23.2222C22.5556 21.7488 21.9702 20.3357 20.9284 19.2938C19.8865 18.2519 18.4734 17.6666 17 17.6666H7.27778C5.80436 17.6666 4.39128 18.2519 3.34941 19.2938C2.30754 20.3357 1.72223 21.7488 1.72223 23.2222V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M12.1389 12.1111C15.2071 12.1111 17.6945 9.6238 17.6945 6.55556C17.6945 3.48731 15.2071 1 12.1389 1C9.07065 1 6.58334 3.48731 6.58334 6.55556C6.58334 9.6238 9.07065 12.1111 12.1389 12.1111Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_3" d="M23.9445 12.1112L26.7222 14.8889L32.2778 9.33337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  )
}

function GifIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="28" height="27" viewBox="0 0 28 27" fill="none" {...props}>
      <path d="M24 13.5V26H4V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.5 7.25H1.5V13.5H26.5V7.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 26V7.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7.25H8.375C7.5462 7.25 6.75134 6.92076 6.16529 6.33471C5.57924 5.74866 5.25 4.9538 5.25 4.125C5.25 3.2962 5.57924 2.50134 6.16529 1.91529C6.75134 1.32924 7.5462 1 8.375 1C12.75 1 14 7.25 14 7.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7.25H19.625C20.4538 7.25 21.2487 6.92076 21.8347 6.33471C22.4208 5.74866 22.75 4.9538 22.75 4.125C22.75 3.2962 22.4208 2.50134 21.8347 1.91529C21.2487 1.32924 20.4538 1 19.625 1C15.25 1 14 7.25 14 7.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDownIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="30" height="31" viewBox="0 0 30 31" fill="none" {...props}>
      <g id="&#240;&#159;&#166;&#134; icon &#34;arrow up right&#34;">
        <path id="Vector" d="M15 0.999954V29.2842" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path id="Vector_2" d="M29.1421 15.1421L15 29.2842L0.85785 15.1421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  )
}

function BookOpenIcon ({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg className={className} width="30" height="27" viewBox="0 0 30 27" fill="none" {...props}>
      <path d="M1 1H9.33333C10.8068 1 12.2198 1.58532 13.2617 2.62718C14.3036 3.66905 14.8889 5.08213 14.8889 6.55556V26C14.8889 24.8949 14.4499 23.8351 13.6685 23.0537C12.8871 22.2723 11.8273 21.8333 10.7222 21.8333H1V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.7778 1H20.4444C18.971 1 17.5579 1.58532 16.5161 2.62718C15.4742 3.66905 14.8889 5.08213 14.8889 6.55556V26C14.8889 24.8949 15.3279 23.8351 16.1093 23.0537C16.8907 22.2723 17.9505 21.8333 19.0556 21.8333H28.7778V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export {
  NicolasVector,
  PinIcon,
  PlusCircleIcon,
  ArrowDownRight,
  InboxIcon,
  PhoneIcon,
  NicoSymbol,
  NicoSymbolBlue,
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
  CrossHairIcon,
  UserCheckIcon,
  GifIcon,
  ArrowDownIcon,
  BookOpenIcon
}
