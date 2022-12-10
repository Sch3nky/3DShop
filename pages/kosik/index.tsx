
import Footer from "../../lib/footer";
import Head_global from "../../lib/global-head";
import Navigation from "../../lib/navigation";


function Product() {
    return (  
        <div>
            <Head_global name="Košík"/>
            <Navigation/>
            
            <main>
                <section className="products">

                </section>
                <section className="payment">

                </section>
            </main>
            
            <Footer />
        </div>
    );
}

export default Product;