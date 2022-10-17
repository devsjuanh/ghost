function formatNewsletterResponse(newsletters) {
    return newsletters.map(({id, name, description, sort_order: sortOrder}) => {
        return {id, name, description, sort_order: sortOrder};
    });
}

module.exports.formattedMemberResponse = function formattedMemberResponse(member) {
    if (!member) {
        return null;
    }
    const data = {
        uuid: member.uuid,
        email: member.email,
        name: member.name,
        firstname: member.name && member.name.split(' ')[0],
        expertise: member.expertise,
        avatar_image: member.avatar_image,
        subscribed: !!member.subscribed,
        subscriptions: member.subscriptions || [],
        paid: member.status !== 'free',
        enable_comment_notifications: member.enable_comment_notifications
    };
    if (member.newsletters) {
        data.newsletters = formatNewsletterResponse(member.newsletters);
    }
    return data;
};
