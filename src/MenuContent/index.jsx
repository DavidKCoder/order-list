import React, {useState} from 'react';
import menu from "../menu";

function MenuContent() {

  const [orderList, setOrderList] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleAddOrderList = (e, item) => {
      const orderListCopy = [...orderList];
      const orderCoast = parseFloat(item.price.split(",").join("."));
      const orderName = item.label;
      const currentOrderIndex = orderListCopy.length ? orderListCopy.findIndex((item) => item.label === orderName) : -1;
      const order = {
        price: orderCoast,
        count: 1,
        label: orderName,
      }
      currentOrderIndex !== -1 ? orderListCopy[currentOrderIndex].price += orderCoast : orderListCopy.push(order);
      if (currentOrderIndex !== -1) {
        orderListCopy[currentOrderIndex].count += 1
      }
      const totalPriceCopy = orderListCopy.reduce(
        (prevValue, currentValue) => prevValue + currentValue.price,
        0
      );
      setOrderList(orderListCopy);
      setTotalPrice(totalPriceCopy);
  };

  const handleRemoveOrderList = (e, item) => {
    const orderCoast = parseFloat(item.price.split(",").join("."));
    const orderName = item.label;
    const orderListCopy = [...orderList];
    const removedOrderIndex = orderListCopy.length ? orderListCopy.findIndex((item) => item.label === orderName) : -1;
    if (removedOrderIndex !== -1) {
      orderListCopy[removedOrderIndex].count -= 1
      orderListCopy[removedOrderIndex].price -= orderCoast
      if (orderListCopy[removedOrderIndex].count === 0) {
        orderListCopy.splice(removedOrderIndex, 1)
      }
    }
    const totalPriceCopy = orderListCopy.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
    setOrderList(orderListCopy);
    setTotalPrice(totalPriceCopy);
  }

  const handleSendOrderList = () => {
    const dateTimeCopy = new Date().toLocaleString();
    setDateTime(dateTimeCopy);
  }

  return (
    <section className='menu-section'>
      <h4>Menu</h4>
      <div className='menu-list container px-4'>
        <div className="row">
          <div className="col">
            <div className="card card-menu">
              <img src="https://img.bestrecipes.com.au/NJJU-8R3/w643-h428-cfill-q90/br/2019/05/pumpkin-pancakes-951968-1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body" id="breakfast">
                  <h5 className="card-title">Breakfast</h5>
                  <div className="form-check">
                      {menu.breakfast.map((item) => (
                        <li className="menu-list-item" key={item.id}>
                          <label className="form-check-label" htmlFor="breakfastChecked">
                            {item.label} {item.price}$
                          </label>
                          <button className="btn btn-group">
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleAddOrderList(e, item)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleRemoveOrderList(e, item)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </button>
                        </li>
                      ))}
                  </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-menu">
              <img src="https://media.self.com/photos/5fe36191fa75923c77cd821f/4:3/w_2560%2Cc_limit/GettyImages-1128962609.jpg" className="card-img-top" alt="..."/>
                <div className="card-body" id="lunch">
                  <h5 className="card-title">Lunch</h5>
                  <div className="form-check">
                      {menu.lunch.map((item) => (
                        <li className="menu-list-item" key={item.id}>
                          <label className="form-check-label" htmlFor="lunchChecked">
                            {item.label} {item.price}$
                          </label>
                          <button className="btn btn-group">
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleAddOrderList(e, item)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleRemoveOrderList(e, item)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </button>
                        </li>
                      ))}
                  </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-menu">
              <img src="https://miro.medium.com/max/620/1*nA_Re0_ANmzPfQVnjZrVwg.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body" id="dessert">
                  <h5 className="card-title">Dessert</h5>
                  <div className="form-check">
                      {menu.dessert.map((item) => (
                        <li className="menu-list-item" key={item.id}>
                          <label className="form-check-label" htmlFor="dessertChecked">
                            {item.label} {item.price}$
                          </label>
                          <button className="btn btn-group">
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleAddOrderList(e, item)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleRemoveOrderList(e, item)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </button>
                        </li>
                      ))}
                  </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-menu">
              <img src="https://cf.ltkcdn.net/cocktails/images/orig/251453-2121x1414-non-alcoholic-cocktails.jpg" className="card-img-top" alt="..."/>
                <div className="card-body" id="coffee">
                  <h5 className="card-title">Coffee</h5>
                  <div className="form-check">
                      {menu.coffee.map((item) => (
                        <li className="menu-list-item" key={item.id}>
                          <label className="form-check-label" htmlFor="coffeeChecked">
                            {item.label} {item.price}$
                          </label>
                          <button className="btn btn-group">
                            <button
                              type="button"
                              className="btn btn-outline-warning btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleAddOrderList(e, item)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-sm"
                              value={item.price}
                              name={item.label}
                              onClick={(e) => handleRemoveOrderList(e, item)}
                            >
                              <i className="fa fa-minus"></i>
                            </button>
                          </button>
                        </li>
                      ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card order-review">
        <img src="https://mykabuki.ru/theme/images/logo-kabuki-line-black.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="check-info">
              <h6>Date: <span>{dateTime}</span></h6>
            </div>
            <hr/>
            <p className="card-text">
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Count</th>
                  <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {orderList.map((item) => (
                  <tr>
                    <td className="item-label">{item.label}</td>
                    <td className="item-count">{item.count}</td>
                    <td className="item-price">{Math.floor(item.price * 100) / 100}$</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </p>
            <h5 className="total-price">
              {Math.floor(totalPrice * 100) / 100}$
            </h5>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm send-order"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={() => handleSendOrderList()}
            >
              Send Order
            </button>
          </div>
      </div>
      {/*Modal*/}
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Table Order</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Count</th>
                  <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {orderList.map((item) => (
                  <tr>
                    <td className="item-label">{item.label}</td>
                    <td className="item-count">{item.count}</td>
                    <td className="item-price">{Math.floor(item.price * 100) / 100}$</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuContent;