import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../../style/project-category.scss';

export default function ProjectCategory(props) {
    const [pos, setPos] = useState(0);
    const [wid, setWid] = useState(38);

    useEffect(() => {
        var line = $('<div>').addClass('line');
        var category = $('.project-category');
        line.appendTo(category);

        var active = category.find('.active');

        if (active.length) {
            setPos(active.position().left);
            setWid(active.width());

            line.css({
                left: pos,
                width: wid,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCategorySelection = (e) => {
        var category = $('.project-category');
        var line = $('.line');
        if (
            !$(e.currentTarget).parent().hasClass('active') &&
            !category.hasClass('animate')
        ) {
            category.addClass('animate');

            var _this = $(e.currentTarget);

            category.find('.category .category-item').removeClass('active');

            var position = _this.parent().position();
            var width = _this.parent().width();

            if (position.left >= pos) {
                line.animate(
                    {
                        width: position.left - pos + width,
                    },
                    300,
                    function () {
                        line.animate(
                            {
                                width: width,
                                left: position.left,
                            },
                            150,
                            function () {
                                category.removeClass('animate');
                            }
                        );
                        _this.parent().addClass('active');
                    }
                );
            } else {
                line.animate(
                    {
                        left: position.left,
                        width: pos - position.left + wid,
                    },
                    300,
                    function () {
                        line.animate(
                            {
                                width: width,
                            },
                            150,
                            function () {
                                category.removeClass('animate');
                            }
                        );
                        _this.parent().addClass('active');
                    }
                );
            }

            setPos(position.left);
            setWid(width);
        }

        props.onSetCatSelection(e.currentTarget.innerHTML);
    };

    const createCategory = (category, index) => {
        if (category === props.selectedCategory) {
            return (
                <li key={index} id={category} className="category-item active">
                    <p onClick={handleCategorySelection}>{category}</p>
                </li>
            );
        } else {
            return (
                <li key={index} id={category} className="category-item">
                    <p onClick={handleCategorySelection}>{category}</p>
                </li>
            );
        }
    };

    return (
        <div className="project-category">
            <ul className="category">{props.categories.map(createCategory)}</ul>
        </div>
    );
}
