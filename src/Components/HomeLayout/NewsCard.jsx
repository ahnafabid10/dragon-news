import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
      {/* Header */}
      <div className="flex bg-base-200 items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {format(new Date(author?.published_date), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
        <button className="flex gap-3 text-gray-500 hover:text-primary cursor-pointer">
        <CiBookmark></CiBookmark>
        <FaShareAlt />
        </button>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <Link to={`/news-details/${id}`} className="text-primary cursor-pointer font-semibold">
            {" "}Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs capitalize"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t text-sm">
          <div className="flex items-center gap-1 text-primary">
            <FaStar className="text-yellow-400" />
            <span>{rating?.number}</span>
            {rating?.badge && (
              <span className="badge badge-primary badge-sm ml-1">
                {rating.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
