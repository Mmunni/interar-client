import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div>
            <h1>blog</h1>
        </div>
    );
};

export default Blog;