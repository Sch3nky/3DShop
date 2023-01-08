import { useRouter } from "next/router";
import Head_global from "../../lib/global-head";

import styles from "../../styles/Product/product.module.scss"

import {CloudArrowUpFill, CheckCircle, ChevronUp, ChevronDown} from 'react-bootstrap-icons';

import { GetStaticProps } from 'next'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { useState } from "react";

type product = {
    id: number,
    name: string,
    price: string,
    price_currency: string,
    description: string,
    tech_properties: string[],
    properties: object[],
    options: object[],
    photos: string[],
    main_photo: string,
    avalible: boolean,
    input_photos: boolean,
    show: boolean
}
interface props{
    data:product
}

function Product({data}:props) {
    const router = useRouter()
    const dispatch = useDispatch();

    const [price, changePrice] = useState(data.price)
    const [quantity, changeQuantity] = useState(1)

    const [added, changeAdd] = useState(false)

    const [currentImage, changeCurrentImage] = useState(data.main_photo)
    function priceChange(){
        const options_el = document.querySelectorAll("."+styles.option)
        var p:number = Number(data.price)
        for (let i=0; i<options_el.length ;i++){
            try{
                const input = options_el[i].querySelector('input[type="radio"]:checked')
                if (input){

                    p = p+Number(input.parentElement?.querySelector("p")?.innerText.replace("+", "").replace("CZK", ""))
                }
            }
            catch{

            }

        }
        changePrice(p.toString())
    }

    function clear(self:any){
        const optionsEl = self.querySelectorAll(`.${styles.option}`);
        for (let i = 0; i < optionsEl.length; i++) {
            const name = optionsEl[i].querySelector('h2')?.innerText;
            const input = optionsEl[i].querySelector(
                `input[name=${name}]:checked`,
              ) as HTMLInputElement;
            input.checked = false
        }

        if (data.input_photos) {
            // Select the photo input element
            const photoInput = document.getElementById(
                'photo_input',
              ) as HTMLInputElement;
            photoInput.value = ""
            maxFiles(photoInput)
        }
    }

    async function AddToCart(self: any) {
        // Select all option elements
        const optionsEl = self.querySelectorAll(`.${styles.option}`);
      
        // Initialize the options array
        const options: any[] = [];
      
        // Clear the message element
        self.querySelector(`.${styles.message}`).innerText = '';
      
        // Check if the product is available
        if (data.avalible) {
          try {
            // Iterate over the option elements
            for (let i = 0; i < optionsEl.length; i++) {
              // Get the name and value of the selected option
              const name = optionsEl[i].querySelector('h2')?.innerText;
              const input = optionsEl[i].querySelector(
                `input[name=${name}]:checked`,
              ) as HTMLInputElement;
              const value = input.value;
      
              // Get the price of the option
              const price = input.parentElement?.querySelector('p')?.innerText
                .replace('+', '')
                .replace('CZK', '');
      
              // Add the option to the options array
              options.push({
                name,
                value,
                price,
              });
            }
      
            // Initialize the cart data
            let cartData: any = {
              id: data.id,
              options,
              quantity
            };
      
            // Check if the product requires input photos
            if (data.input_photos) {
              // Select the photo input element
              const photoInput = document.getElementById(
                'photo_input',
              ) as HTMLInputElement;

              // Check if the user selected any photos
              if (photoInput.files?.length && photoInput.files?.length > 0 && photoInput.files?.length <= 3) {
                // Initialize the photos array
                const photos = [];
      
                // Convert the selected photos to data URLs
                for (let i = 0; i < photoInput.files.length; i++) {
                    photos.push(await convertToDataURL(photoInput.files[i]));
                }
      
                // Update the cart data with the photos
                cartData = {
                  id: data.id,
                  options,
                  photos,
                  quantity
                };
      
                // Add the product to the cart
                dispatch(addToCart(cartData));
                changeAdd(true)
                clear(self)
                setTimeout(()=> {changeAdd(false)}, 5000)
              } else {
                // Set the error message
                self.querySelector(`.${styles.message}`).innerText = 'Vyberte fotografie';
              }
            } else {
                // Add the product to the cart
                dispatch(addToCart(cartData));
                changeAdd(true)
                clear(self)
                setTimeout(()=> {changeAdd(false)}, 5000)
            }

          } catch {
            // Set the error message
            self.querySelector(`.${styles.message}`).innerText = 'Některé možnosti nejsou vybrané';
          }
        } else {
          // Set the error message
          self.querySelector(`.${styles.message}`).innerText = 'Produkt je momentáně nedostupný';
        }

    }

    async function convertToDataURL(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        });
    }

    function maxFiles(fileInput: HTMLInputElement) {
        // Get the error message element
        const errorMessage = document.querySelector(`.${styles.message}`) as HTMLParagraphElement;
      
        // Clear the error message
        errorMessage.innerText = '';
      
        // Get the maximum number of files allowed
        const max:number = Number(fileInput.max);

        // Update the file count label
        const fileCountLabel = fileInput.parentElement?.querySelector('span') as HTMLSpanElement;
      
        // Check if the number of selected files exceeds the maximum
        if (fileInput.files?.length && fileInput.files?.length > max) {
          // Clear the selected files
          fileInput.files = null
          fileCountLabel.innerText = 'Kliknutím vyberte fotku';
          // Set the error message
          errorMessage.innerText = `Maximální počet fotek jsou ${max}`;
        } else {
          if (fileInput.files?.length) {
            fileCountLabel.innerText = `Počet vybraných fotek: ${fileInput.files.length}`;
          } else {
            fileCountLabel.innerText = 'Kliknutím vyberte fotku';
          }
        }
    }
    
    return (  
        <>
            <Head_global name={data.name}/>
            <main className={styles.main}>
                
                <section className={styles.basic_info}>
                    <div className={styles.product_images}>
                        <div className={styles.photo_galery}>
                            <button onClick={()=>{changeCurrentImage(data.main_photo)}} className={styles.photo}>
                                <img src={"http://127.0.0.1:5000/"+data.main_photo}/>
                            </button>
                            {data.photos.map(
                                (item:any, key:number) => 
                                <button className={styles.photo} onClick={()=>{changeCurrentImage(item)}} key={key}>
                                    <img src={"http://127.0.0.1:5000/"+item}/>
                                </button>
                            )}
                        </div>
                        <div className={styles.selected_photo}>
                            <img src={"http://127.0.0.1:5000/"+currentImage}/>
                        </div>
                    </div>
                </section>

                <section className={styles.info}>
                    <div id="description" className={styles.description}>
                        <h1>
                            {data.name}
                        </h1>
                        <p>
                            {data.description}
                        </p>
                    </div>

                    <div id="properties" className={styles.properties}>
                        {data.tech_properties.length > 0 && 
                            <ul>
                                {data.tech_properties.map(
                                    (item:any, key:number) => 
                                    <li key={key}>
                                       <div>{item}</div>
                                    </li>
                                )}
                            </ul>
                        }
                    </div>

                    <div id="properties" className={styles.properties_technical}>
                        {data.properties.length > 0 && 
                            <ul>
                                {data.properties.map(
                                    (item:any, key:number) => 
                                    <li key={key}>
                                        <div>{item.name}</div><div>{item.value}</div>
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                </section>
            
                <div className={styles.action_bar_wrapper}>
                    <form className={styles.action_bar} onSubmit={(event) => {AddToCart(event.target); event.preventDefault()}}>
                        <div className={styles.top}>
                            <h1 className={styles.product_name}>
                                {data.name}
                            </h1>
                            <p>Popisek, který zatím nejde nijak změnit a prý má bý krátký.</p>
                        </div>
                        <div className={styles.options}>
                            {data.options.map(
                                (item:any, key:number) => 
                                <div key={key} className={styles.option}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.options_container}>
                                        {item.options.map(
                                            (item2:any, key2:number) => 
                                            <div key={key2} className={styles.radio}>
                                                <input type="radio" name={item.name} onChange={priceChange} value={item2.name} id={item2.name} hidden/>
                                                <label htmlFor={item2.name}>
                                                    <div>
                                                        <h3>{item2.name}</h3>
                                                        <p>+{item2.price}{data.price_currency}</p>
                                                    </div>
                                                </label>
                                            </div>
                                        )}
                                
                                    </div>
                                </div>
                            )}
                            {
                                data.input_photos &&
                                <div className={styles.fileInput}>
                                    <h2>Vyberte fotografie</h2>
                                    <input type="file" id="photo_input" accept="image/jpeg, image/png, image/gif" onChange={(e) => maxFiles(e.target)} max={3} multiple hidden/>
                                    <label htmlFor="photo_input">
                                        <CloudArrowUpFill />
                                        <span>Kliknutím vyberte fotku</span>
                                    </label>
                                </div>
                            }
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.info}>
                                <h2 className={styles.avalibility}>
                                    Dostupné
                                </h2>

                                <h2 className={styles.price}>
                                    {Number(price) * quantity} {data.price_currency}
                                </h2>
                            </div>
                            <div className={styles.add_to_cart}>                           
                                {
                                    added ?
                                    <div className={styles.confirmation}>
                                        <CheckCircle />
                                        <h2>Přidáno do košíku</h2>
                                    </div>
                                    :
                                    <div className={styles.submit}>
                                        {
                                            !data.input_photos &&
                                            <div className={styles.amount}>
                                                <div className={styles.count}><p>{quantity}</p></div>

                                                <div className={styles.buttons}>
                                                    <button type="button" onClick={() => {changeQuantity(quantity + 1)}}>
                                                        <ChevronUp />
                                                    </button>
                                                    <button type="button" onClick={() => {if (quantity > 1){changeQuantity(quantity - 1)}}}>
                                                        <ChevronDown />
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                        <input type="submit" value="Koupit"/>
                                    </div>
                                }
                                <p>Krátké info o dopravě</p>
                            </div>
                            <p className={styles.message}></p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Product;
export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:5000/get/product')
    const posts = await res.json()

    var paths = []
    for (let i = 1; i<posts.id_last; i++){
        paths.push({
            params: { product_id: i.toString()},
        })
    }
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps<{data:product}> = async (context) => {
    const params = context.params!  
    const res = await fetch("http://127.0.0.1:5000/get/product/"+params.product_id)
    const raw_data = await res.json()
    const data:product = raw_data.data
    return {
        props: {
          data,
        },
      }
}