import img_cover from '../../Assests/Images/dashboard/top_wrapper.jpg';
const TopWrapper  = () => {
  return (
    <div className="top-wrapper">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-6">
          <img src={img_cover} width="100%"/>
        </div>
        <div className="col-12 col-md-6">
          <div className="tw-about text-center">
            <p className="tw-heading">
              Smart Agri Bazaar🚛 
            </p>
            <p className="tw-heading">
              Trust  &gt;&gt;  Deal  &gt;&gt;  Delivered
            </p>
            <p className="tw-sub-heading">
              We are aggregation platform for farm produce and connect between the points of Origin, Consumption and Financial.
            </p>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  ) 
}
export default TopWrapper;