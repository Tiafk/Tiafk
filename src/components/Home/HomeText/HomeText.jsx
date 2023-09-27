import { useState } from "react";
import styles from "../_home.module.scss";

function HomeText() {
  const [text] = useState({ text: "I am <junior front-end developer>" });

  return (
    <div className={styles.wrapper_text}>
      <div className={styles.container}>
        <p className={styles.light_text}>Hi, my name is</p>
        <p className={styles.text}>Akchurin Ruslan</p>
        <p className={styles.light_text}>{text.text}</p>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/Tiafk">
          <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.0335 0C9.42898 0 0 8.51741 0 19C0 29.4826 9.42898 38 21.0335 38C32.6379 38 42.0669 29.4826 42.0669 19C42.0669 8.51741 32.6379 0 21.0335 0ZM21.0335 1.65217C31.6484 1.65217 40.2379 9.41126 40.2379 19C40.2379 19.0597 40.2326 19.1178 40.2326 19.1759C39.6485 19.1275 38.9716 19.0807 38.1124 19.0532C36.8979 19.0145 35.3654 19.0258 33.6292 19.1033C33.6935 18.6983 33.7382 18.2869 33.74 17.8657C33.8293 16.3184 33.2542 14.8712 32.3182 13.5933C32.5451 12.8882 32.8094 11.9912 32.8755 10.9731C32.9505 9.81301 32.8398 8.52709 31.8092 7.65744L31.5448 7.43478H31.184C28.7299 7.43478 27.0509 8.36252 26.0239 9.09825C24.5414 8.58033 22.8732 8.26087 21.0335 8.26087C19.183 8.26087 17.4987 8.58356 15.9555 9.10148C14.9285 8.36574 13.2477 7.43478 10.7918 7.43478H10.4328L10.1684 7.65583C9.16463 8.49805 9.07175 9.75008 9.13427 10.9037C9.18964 11.9218 9.43969 12.8479 9.66117 13.5869C8.71095 14.8905 8.13939 16.3749 8.13939 17.8432C8.13939 18.2659 8.18226 18.6773 8.24656 19.0839C6.59439 19.0145 5.12262 19.0016 3.95449 19.0387C3.09536 19.0662 2.41842 19.1113 1.83435 19.1613C1.83435 19.1081 1.829 19.0549 1.829 19C1.829 9.41126 10.4185 1.65217 21.0335 1.65217ZM11.3366 9.19506C13.1816 9.35318 14.5695 10.097 15.2125 10.6133L15.6411 10.9553L16.1698 10.7601C17.6166 10.2228 19.2295 9.91304 21.0335 9.91304C22.8375 9.91304 24.4521 10.2244 25.7881 10.752L26.324 10.965L26.7616 10.6133C27.4046 10.097 28.7942 9.35318 30.6411 9.19506C30.8858 9.56292 31.1001 10.0857 31.0483 10.8763C30.9858 11.8234 30.7071 12.8544 30.4946 13.4659L30.3571 13.8644L30.6303 14.2016C31.5359 15.3165 31.9967 16.5217 31.9181 17.798L31.9163 17.8206V17.8432C31.9163 19.9051 31.0947 21.5541 29.3443 22.7771C27.5939 24.0001 24.8308 24.7826 20.9424 24.7826C17.054 24.7826 14.289 24.0001 12.5386 22.7771C10.7882 21.5541 9.96839 19.9051 9.96839 17.8432C9.96839 16.6331 10.4524 15.302 11.3455 14.2016L11.6134 13.8725L11.4848 13.4804C11.2723 12.8302 11.0133 11.775 10.9615 10.823C10.9186 10.0308 11.1258 9.53066 11.3366 9.19506ZM6.29611 19.8438C6.94269 19.8519 7.68393 19.8826 8.42517 19.9164C8.49662 20.1746 8.57699 20.4279 8.67523 20.6748C5.65131 20.7328 3.38829 21.0071 1.99332 21.2427C1.93438 20.8297 1.88794 20.4134 1.86115 19.9907C2.89174 19.9019 4.34565 19.8212 6.29611 19.8438ZM35.7708 19.8567C37.7213 19.8342 39.1734 19.9148 40.204 20.0036C40.1772 20.4198 40.1308 20.8297 40.0736 21.2379C38.6286 20.9991 36.3049 20.7232 33.2024 20.6796C33.2988 20.4376 33.3792 20.1875 33.4488 19.9358C34.2669 19.8955 35.0653 19.8648 35.7708 19.8567ZM9.06461 21.4944C9.61116 22.4818 10.3899 23.3644 11.4205 24.084C12.8298 25.0682 14.6606 25.7555 16.8968 26.1234C16.6039 26.3944 16.3377 26.6929 16.102 27.0076L16.0466 26.964C16.0519 26.9592 15.5911 27.1673 14.9053 27.2221C14.2194 27.277 13.371 27.2609 12.6208 27.2609C11.5009 27.2609 11.0079 26.7833 10.2184 25.912C9.78084 25.3796 9.24858 24.9504 8.73239 24.6229C8.20369 24.2889 7.7518 24.0517 7.19274 23.9678L7.11773 23.9565H7.04092C6.61404 23.9565 6.20144 23.9839 5.81564 24.3825C5.62274 24.5809 5.49056 24.9504 5.5763 25.2618C5.66203 25.5732 5.88172 25.7652 6.07641 25.883C7.3267 26.6365 7.5464 28.1257 8.33051 29.4503C9.06282 30.7669 10.64 31.3913 12.2546 31.3913H14.632V35.3588C8.20191 33.3081 3.35078 28.2564 2.13264 22.0591C3.53296 21.8203 5.87637 21.5347 9.06461 21.4944ZM32.8148 21.5008C36.0727 21.5267 38.4822 21.8122 39.9361 22.0543C38.7197 28.2531 33.8668 33.3081 27.4349 35.3588V31.0605C27.4349 29.752 26.9598 28.308 26.1311 27.1044C25.8792 26.7381 25.5845 26.3928 25.2541 26.083C27.3706 25.7055 29.1103 25.0295 30.4642 24.084C31.493 23.366 32.27 22.4867 32.8148 21.5008ZM19.8439 26.5171H22.4052C23.1482 26.5171 23.9413 27.0527 24.5771 27.9756C25.213 28.8985 25.606 30.1393 25.606 31.0605V35.8509C24.1395 36.1736 22.6106 36.3478 21.0335 36.3478C19.4563 36.3478 17.9274 36.1736 16.461 35.8509V31.0605C16.461 30.1602 16.8896 28.9227 17.5666 27.995C18.2435 27.0673 19.1009 26.5171 19.8439 26.5171ZM9.42719 27.4932C10.2184 28.2354 11.1776 28.913 12.6208 28.913C13.3335 28.913 14.2229 28.9356 15.0678 28.8679C15.0714 28.8679 15.0731 28.8663 15.0767 28.8663C14.966 29.1551 14.882 29.4471 14.8124 29.7391H12.2546C11.1276 29.7391 10.3292 29.3713 9.96303 28.7081L9.95589 28.6968L9.95053 28.6872C9.80049 28.4355 9.60223 27.9305 9.42719 27.4932Z"
              fill="#C1C0C0"
            />
          </svg>
        </a>
        <a href="https://vk.com/p0rnotraktor">
          <svg fill="#000000" width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.692 10.831s.849.838 1.058 1.227c.006.008.009.016.011.02.085.143.105.254.063.337-.07.138-.31.206-.392.212h-1.5c-.104 0-.322-.027-.586-.209-.203-.142-.403-.375-.598-.602-.291-.338-.543-.63-.797-.63a.305.305 0 0 0-.095.015c-.192.062-.438.336-.438 1.066 0 .228-.18.359-.307.359h-.687c-.234 0-1.453-.082-2.533-1.221-1.322-1.395-2.512-4.193-2.522-4.219-.075-.181.08-.278.249-.278h1.515c.202 0 .268.123.314.232.054.127.252.632.577 1.2.527.926.85 1.302 1.109 1.302a.3.3 0 0 0 .139-.036c.338-.188.275-1.393.26-1.643 0-.047-.001-.539-.174-.775-.124-.171-.335-.236-.463-.26a.55.55 0 0 1 .199-.169c.232-.116.65-.133 1.065-.133h.231c.45.006.566.035.729.076.33.079.337.292.308 1.021-.009.207-.018.441-.018.717 0 .06-.003.124-.003.192-.01.371-.022.792.24.965a.216.216 0 0 0 .114.033c.091 0 .365 0 1.107-1.273a9.718 9.718 0 0 0 .595-1.274c.015-.026.059-.106.111-.137a.266.266 0 0 1 .124-.029h1.781c.194 0 .327.029.352.104.044.119-.008.482-.821 1.583l-.363.479c-.737.966-.737 1.015.046 1.748z" />
          </svg>
        </a>
        <a href="https://t.me/Tiafkk">
          <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.2907 7.13263C40.2242 3.43246 25.9735 2.86577 23.0067 2.39908C18.3732 1.66571 13.723 1.03235 9.05608 0.515662C6.98932 0.282318 3.63917 -0.517718 1.65574 0.515662C1.60574 0.482327 1.53907 0.432325 1.48907 0.39899C1.07238 0.115644 0.655699 0.39899 0.489025 0.782341C0.172344 0.865678 -0.0776677 1.14902 0.0223369 1.51571C3.03914 11.3662 5.47258 22.2666 11.6729 30.6837C12.1229 31.2837 12.8229 31.4004 13.4063 30.9004C15.1397 29.4336 16.8064 27.9171 18.4565 26.3668C18.5565 26.667 18.8065 26.9335 19.1732 26.967C22.2567 27.217 25.6402 27.6671 28.5903 28.7671C28.6568 28.8671 28.7068 28.9671 28.7736 29.0838C29.3403 30.0172 30.6904 29.5838 30.7571 28.5504C30.8904 26.067 30.7571 23.6002 30.6071 21.1166C30.4737 18.9332 30.6737 16.5331 30.2737 14.3998C30.2737 14.3665 30.2404 14.3331 30.2404 14.2998C31.4404 14.0164 32.7071 13.0831 33.6405 12.5497C35.7573 11.3497 37.774 9.98292 39.9241 8.81621C40.1908 8.68287 40.324 8.48286 40.4073 8.26618C40.4242 8.26618 40.4407 8.26618 40.4407 8.26618C41.0075 8.23268 41.4574 7.71599 41.2907 7.13263ZM17.7898 10.3828C19.7899 11.4495 25.7735 16.033 28.1903 14.683C28.407 14.5663 28.507 14.3496 28.5403 14.1163C28.5571 14.1329 28.5905 14.1329 28.607 14.1496C28.557 14.2163 28.507 14.2996 28.4736 14.383C27.8569 16.1664 28.2901 18.4331 28.407 20.2666C28.5071 21.8333 28.607 23.4 28.6403 24.9668C27.3236 22.9833 25.9735 21.0166 24.5234 19.1165C24.5401 18.8998 24.4901 18.6498 24.2901 18.4331C20.9399 14.9163 16.5899 11.9328 12.7729 8.93271C11.3895 7.84933 10.0061 6.74928 8.62273 5.6659C11.6895 7.1993 14.7397 8.74937 17.7898 10.3828ZM12.8229 28.4669C7.65602 20.8664 6.05594 11.7328 2.32244 3.4658C3.12248 4.11583 4.13919 4.76585 4.55588 5.08254C6.80598 6.86595 8.98941 8.69937 11.2728 10.4661C14.9063 13.2829 18.3898 17.0497 22.4234 19.3498C19.2732 22.4498 16.1397 25.5501 12.8229 28.4669ZM19.5399 25.3335C21.0733 23.8666 22.59 22.3833 24.0901 20.8833C24.9735 22.6333 25.9402 24.3167 26.9236 26.0001C24.5234 25.3501 21.79 24.9833 19.5399 25.3335ZM32.8405 10.2661C31.8736 10.8495 30.8904 11.4328 29.9404 12.0329C29.607 12.2495 29.257 12.4329 28.9403 12.6495C28.6736 12.8329 28.0736 13.3162 28.6236 13.2162C28.4738 13.2496 28.3905 13.3496 28.3405 13.4662C28.2903 13.4162 28.2571 13.3662 28.2069 13.3329C24.5734 11.2495 20.6734 9.46607 16.9564 7.49931C14.673 6.29926 12.3896 4.81586 10.0228 3.54913C14.2396 3.96582 18.6065 4.06582 22.4067 4.64918C26.3569 5.26588 30.2902 5.94924 34.1906 6.74928C35.1073 6.93262 36.1573 7.31597 37.2074 7.64932C35.724 8.49936 34.2904 9.3994 32.8405 10.2661Z"
              fill="#C1C0C0"
            />
            <path d="M25.9402 40.6842C25.7735 40.1175 25.2235 39.8008 24.7902 39.4508C24.1403 38.9341 23.4901 38.4008 22.8567 37.8674C22.34 37.434 21.8234 37.0174 21.2733 36.6173C20.99 36.4007 20.6233 36.3342 20.3733 36.1675C20.1066 36.0008 19.7233 36.3508 19.9233 36.6173C20.0733 36.8174 20.1233 37.1174 20.3233 37.3342C20.79 37.8842 21.3067 38.3843 21.8234 38.8843C22.4234 39.4508 23.0234 40.0342 23.6401 40.5844C24.0901 41.001 24.5901 41.5676 25.2568 41.5676C25.7235 41.5842 26.0735 41.1174 25.9402 40.6842Z" fill="#C1C0C0" />
            <path d="M31.3736 39.5007C30.7571 38.8172 29.7735 38.434 29.0235 37.884C28.0401 37.1506 27.2067 36.2339 26.24 35.4839C25.74 35.1005 25.1566 35.6839 25.5567 36.1674C26.2734 37.0841 27.1232 37.9007 27.9901 38.6675C28.757 39.3509 29.7402 40.351 30.7902 40.501C31.3736 40.5673 31.8071 39.9674 31.3736 39.5007Z" fill="#C1C0C0" />
            <path d="M36.2071 37.4005C36.0238 37.0171 35.7904 36.9338 35.4239 36.7671C35.0239 36.5838 34.6571 36.3171 34.2904 36.0671C33.457 35.5006 32.7238 34.817 31.9403 34.1837C31.4402 33.767 30.7735 34.4003 31.2069 34.917C31.8904 35.7171 32.6903 36.4171 33.5072 37.067C34.157 37.6003 34.9571 38.4337 35.8238 38.2837C36.2573 38.2174 36.3573 37.7173 36.2071 37.4005Z" fill="#C1C0C0" />
            <path d="M39.7742 32.7836C39.3575 32.5838 38.4741 31.9002 37.9407 31.5169C37.074 30.8668 36.2573 30.1501 35.4406 29.4334C34.9239 28.9834 34.2072 29.6668 34.6739 30.2001C35.474 31.1002 36.3738 31.9336 37.2905 32.7336C37.9572 33.3169 38.6906 34.0838 39.6408 33.8503C40.1075 33.7336 40.2408 33.0004 39.7742 32.7836Z" fill="#C1C0C0" />
            <path d="M41.2242 27.1167C40.7242 26.4833 39.7741 26.1335 39.0908 25.6668C38.1907 25.0501 37.4072 24.2501 36.6571 23.4499C36.2905 23.0665 35.5738 23.5834 35.8904 24.0332C36.5238 24.9499 37.2738 25.7168 38.0739 26.4668C38.7406 27.0835 39.6406 28.0502 40.5407 28.2336C41.2742 28.3836 41.6575 27.6501 41.2242 27.1167Z" fill="#C1C0C0" />
            <path d="M41.6909 22.0166C40.4242 21.4332 39.2241 20.7165 38.1907 19.7332C37.8574 19.4165 37.324 19.8165 37.5407 20.2332C38.0241 21.0999 38.7408 21.7999 39.5076 22.3999C40.1077 22.8833 40.7075 23.3833 41.5244 23.1333C42.0076 23 42.1909 22.2499 41.6909 22.0166Z" fill="#C1C0C0" />
            <path d="M44.9575 18.7832C44.6242 17.9665 43.2408 17.5664 42.4242 17.1164C41.874 16.8164 40.6408 15.833 39.9573 16.1497C39.9406 16.1497 39.9406 16.1497 39.9241 16.1664C39.9073 16.183 39.874 16.183 39.8575 16.1997H39.8741C39.7243 16.283 39.6074 16.4497 39.6743 16.6164C39.5576 16.333 39.6909 16.9164 39.7576 17.0164C39.8576 17.1831 40.0243 17.2831 40.1743 17.3998C40.6077 17.7331 41.0742 18.0331 41.5244 18.3498C42.2411 18.8498 43.4244 20.0165 44.3578 19.8499C44.7743 19.7665 45.1242 19.1832 44.9575 18.7832Z" fill="#C1C0C0" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HomeText;
