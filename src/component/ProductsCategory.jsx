import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchAllProducts } from '../services/ProductServices';
import { StarRating } from './OurProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useWishlist } from '../context/WishlistContext';

// المكون الرئيسي
const ProductsCategory = () => {
    const { category } = useParams();
    const shortCategory = category.slice(0, 2);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noProducts, setNoProducts] = useState(false); // حالة لعرض رسالة "لا توجد منتجات"
    const { addToWishlist } = useWishlist();
    const handleAddToWishlist = (product) => {
        addToWishlist(product);
    };

    // دالة لجلب البيانات
    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchAllProducts();
                setProducts(data);
                setLoading(false);

                // التحقق من وجود منتجات في الفئة
                const filteredProducts = data.filter(item => item.category.slice(0, 2) === shortCategory);
                setNoProducts(filteredProducts.length === 0); // إذا كانت المنتجات فارغة، نعرض الرسالة

                console.log(data);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getProducts();
    }, [shortCategory]);

    // عرض حالة التحميل
    if (loading) {
        return <div className="loading">Loading&#8230;</div>;
    }

    return (
        <div>
            <h3 className="container my-5 text-danger d-flex align-items-center gap-3">
                <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
                {category.charAt(0).toUpperCase() + category.slice(1)} Category</h3>

            {/* عرض رسالة "لا توجد منتجات" إذا كانت القائمة فارغة */}
            {noProducts && <h1 className='d-flex justify-content-center align-items-center text-black-50 ' style={{ height: "30vh" }}>No Products Here</h1>}


            <div className="todays d-flex flex-wrap justify-content-center gap-5 my-5 ">
                {products.map((item) => {
                    if (item.category.slice(0, 2) === shortCategory) {
                        return (
                            <Link to={`/product/${item.id}`} key={item.id} className="text-black text-decoration-none">
                                <div className="product">
                                    <div className="d-flex justify-content-end p-2">
                                        <FontAwesomeIcon className="bg-body rounded-5 p-2" icon={faHeart}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.target.classList.add("text-danger");
                                                handleAddToWishlist(item);
                                            }}
                                        />
                                    </div>

                                    <div className="d-flex p-2">
                                        <img className="m-auto" src={item.image || 'productImg'} alt="Itemimg" style={{ maxWidth: '80px' }} />

                                        <span className="text-black " >
                                            <FontAwesomeIcon className="showProduct bg-body rounded-5 p-2 " icon={faEye} />
                                        </span>
                                    </div>
                                </div>

                                <div className="details">
                                    <p>{item.title.slice(0, 20)}</p>
                                    <p className="text-danger gap-3 d-flex">
                                        ${Math.floor(item.price / 1.1)}{' '}
                                        <span className="text-black-50 text-decoration-line-through">{Math.floor(item.price)}</span>
                                    </p>
                                    <div className="d-flex gap-3">
                                        <StarRating rating={item.rating.rate} />
                                        <span className="d-flex">({item.rating.count})</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default ProductsCategory;
