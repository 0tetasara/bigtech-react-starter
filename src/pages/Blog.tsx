import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cryptocurrency Trading",
      excerpt: "Explore the latest trends and technologies shaping the future of cryptocurrency trading platforms.",
      image: "/src/assets/img/blog/blog01.jpg",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Trading"
    },
    {
      id: 2,
      title: "Understanding Blockchain Security",
      excerpt: "Learn about the security measures that protect your digital assets in blockchain networks.",
      image: "/src/assets/img/blog/blog02.jpg",
      date: "March 12, 2024",
      author: "Sarah Johnson",
      category: "Security"
    },
    {
      id: 3,
      title: "ICO vs IEO: Which is Better?",
      excerpt: "Compare Initial Coin Offerings and Initial Exchange Offerings to make informed investment decisions.",
      image: "/src/assets/img/blog/blog03.jpg",
      date: "March 10, 2024",
      author: "Michael Brown",
      category: "Investment"
    },
    {
      id: 4,
      title: "DeFi Revolution: Decentralized Finance Explained",
      excerpt: "Discover how decentralized finance is transforming traditional financial services.",
      image: "/src/assets/img/blog/blog04.jpg",
      date: "March 8, 2024",
      author: "Emily Davis",
      category: "DeFi"
    },
    {
      id: 5,
      title: "Cryptocurrency Regulations Around the World",
      excerpt: "Stay updated on the latest cryptocurrency regulations and compliance requirements globally.",
      image: "/src/assets/img/blog/blog05.jpg",
      date: "March 5, 2024",
      author: "John Smith",
      category: "Regulation"
    },
    {
      id: 6,
      title: "NFTs and Digital Asset Ownership",
      excerpt: "Understanding Non-Fungible Tokens and their impact on digital asset ownership.",
      image: "/src/assets/img/blog/blog06.jpg",
      date: "March 3, 2024",
      author: "Sarah Johnson",
      category: "NFT"
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <section className="breadcrumb-area breadcrumb-bg" data-background="/src/assets/img/bg/breadcrumb-bg.jpg">
        <div className="breadcrumb-shape-wrap">
          <img src="/src/assets/img/bg/breadcrumb_shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2 className="title">Blog</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Area */}
      <section className="blog-area pt-130 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="postbox__wrapper">
                {blogPosts.map((post) => (
                  <article key={post.id} className="postbox__item format-image mb-50">
                    <div className="postbox__thumb">
                      <a href={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                      </a>
                    </div>
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span><i className="far fa-calendar-alt"></i> {post.date}</span>
                        <span><i className="far fa-user"></i> By {post.author}</span>
                        <span><i className="far fa-folder-open"></i> {post.category}</span>
                      </div>
                      <h3 className="postbox__title">
                        <a href={`/blog/${post.id}`}>{post.title}</a>
                      </h3>
                      <div className="postbox__text">
                        <p>{post.excerpt}</p>
                      </div>
                      <div className="postbox__read-more">
                        <a href={`/blog/${post.id}`} className="btn">Read More</a>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className="pagination-wrap">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <i className="fas fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-7">
              <aside className="blog-sidebar">
                {/* Search Widget */}
                <div className="sidebar__widget">
                  <div className="sidebar__widget-title">
                    <h3>Search</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar-search-form position-relative">
                      <form>
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="sidebar__widget">
                  <div className="sidebar__widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <ul className="sidebar__cat-list">
                      <li><a href="#">Trading <span className="float-right">12</span></a></li>
                      <li><a href="#">Security <span className="float-right">8</span></a></li>
                      <li><a href="#">Investment <span className="float-right">15</span></a></li>
                      <li><a href="#">DeFi <span className="float-right">6</span></a></li>
                      <li><a href="#">Regulation <span className="float-right">9</span></a></li>
                      <li><a href="#">NFT <span className="float-right">4</span></a></li>
                    </ul>
                  </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="sidebar__widget">
                  <div className="sidebar__widget-title">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="sidebar__post-item">
                          <div className="sidebar__post-thumb">
                            <a href={`/blog/${post.id}`}>
                              <img src={post.image} alt={post.title} />
                            </a>
                          </div>
                          <div className="sidebar__post-content">
                            <h5><a href={`/blog/${post.id}`}>{post.title}</a></h5>
                            <span className="post-date">{post.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="sidebar__widget">
                  <div className="sidebar__widget-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__tag">
                      <a href="#">Bitcoin</a>
                      <a href="#">Ethereum</a>
                      <a href="#">Trading</a>
                      <a href="#">Blockchain</a>
                      <a href="#">DeFi</a>
                      <a href="#">NFT</a>
                      <a href="#">Security</a>
                      <a href="#">Investment</a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
