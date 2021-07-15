function Ya() {
    return (Ya = Va(regeneratorRuntime.mark((function e() {
        var t, n, r, a, o, i, c, l, u, s = arguments;
        return regeneratorRuntime.wrap((function (e) {
            for (; ;)
                switch (e.prev = e.next) {
                    case 0:
                        return n = s.length > 0 && void 0 !== s[0] ? s[0] : {},
                            r = n.tagId,
                            a = void 0 === r ? "" : r,
                            o = n.count,
                            i = void 0 === o ? 10 : o,
                            c = s.length > 1 && void 0 !== s[1] ? s[1] : null,
                            e.next = 4,
                            Ar("/aweme/v1/web/channel/feed/", Ha(Ha({}, qa), {}, (Wa(t = {}, "tag_id", a),
                                Wa(t, "count", i),
                                t)), c, Ka, {
                                errorTags: {
                                    tagId: a
                                }
                            }, (function (e) {
                                var t;
                                return 0 === e.statusCode && 0 === (null === (t = e.awemeList) || void 0 === t ? void 0 : t.length)
                            }
                            ));
                    case 4:
                        return l = e.sent,
                            u = l.result,
                            e.abrupt("return", u);
                    case 7:
                    case "end":
                        return e.stop()
                }
        }
        ), e)
    }
    )))).apply(this, arguments)
}