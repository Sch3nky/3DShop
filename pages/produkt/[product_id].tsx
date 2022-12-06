import { useRouter } from "next/router";
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";

function Product() {
    const router = useRouter()
    const { product_id }: any = router.query

    console.log(product_id)

    return (  
        <div>
            <Head_global name={product_id}/>
            <Navigation/>
            <main>
                <div>
                    <section>

                    </section>
                </div>
                <div>
                    <section>

                    </section>
                    <div>

                    </div>
                    <section>

                    </section>
                    <section>

                    </section>
                </div>

            </main>
            <Footer />
        </div>
    );
}

export default Product;