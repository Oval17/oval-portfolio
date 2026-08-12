import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { VIOLET } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bootstrap 2 → 5: My GSoC '26 with Learning Unlimited — Oval Studio",
  description:
    "Pre-GSoC groundwork, four theming-migration phases, and what happens after the coding period ends — my Google Summer of Code 2026 with Learning Unlimited / ESP-Website.",
};

const REPO = "https://github.com/learning-unlimited/ESP-Website";
const pr = (n: number) => `${REPO}/pull/${n}`;
const ALL_PRS = `${REPO}/pulls?q=is%3Apr+author%3AOval17+archived%3Afalse`;
const PRE_GSOC_PRS = `${REPO}/pulls?q=is%3Apr+author%3AOval17+created%3A%3C2026-05-26`;
const CURRENT_PRS = `${REPO}/pulls?q=is%3Apr+author%3AOval17+created%3A%3E%3D2026-08-01`;

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xs px-2 py-1 rounded-md font-mono whitespace-nowrap"
      style={{ background: "var(--surface)", color: "var(--text-2)", border: "1px solid var(--border)" }}
    >
      {children}
    </span>
  );
}

function PRLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:opacity-70"
      style={{ color: VIOLET, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
    >
      {children}
    </a>
  );
}

function SectionHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2
      className="flex items-baseline gap-2.5 text-lg font-bold mb-5 mt-14"
      style={{ color: "var(--text-1)" }}
    >
      <span className="font-mono text-sm" style={{ color: VIOLET }}>
        {index}
      </span>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[15px] leading-[1.85] mb-5"
      style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}
    >
      {children}
    </p>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] px-1.5 py-0.5 rounded font-mono whitespace-nowrap"
      style={{ background: `${VIOLET}10`, color: VIOLET, border: `1px solid ${VIOLET}25` }}
    >
      {children}
    </span>
  );
}

function Phase({
  n,
  title,
  prNum,
  merged,
  stats,
  children,
}: {
  n: string;
  title: string;
  prNum: number;
  merged: string;
  stats: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="studio-card rounded-lg p-4 sm:p-5 mb-4"
      style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-xs font-bold" style={{ color: VIOLET }}>
            {n}
          </span>
          <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
            {title}
          </p>
        </div>
        <p className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
          merged {merged}
        </p>
      </div>
      <p
        className="text-sm leading-[1.75] mb-3"
        style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}
      >
        {children}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Stat>{stats}</Stat>
        <PRLink href={pr(prNum)}>#{prNum} ↗</PRLink>
      </div>
    </div>
  );
}

export default function GsocBlogPost() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <div className="relative">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: "radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.12)) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="pt-10">
            {/* back link */}
            <Link
              href="/studio/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono mb-8 transition-opacity hover:opacity-70"
              style={{ color: VIOLET }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={12} height={12}>
                <path d="M15 6l-6 6 6 6" />
              </svg>
              all blogs
            </Link>

            {/* kicker */}
            <div className="text-xs font-mono mb-3" style={{ color: "var(--text-3)" }}>
              $ cat gsoc-2026-final-submission.md
            </div>

            {/* title */}
            <h1
              className="font-bold mb-4"
              style={{ color: "var(--text-1)", fontSize: "clamp(24px, 5vw, 34px)", lineHeight: 1.25, letterSpacing: "-0.01em" }}
            >
              Bootstrap 2 → 5: my GSoC &apos;26 with Learning Unlimited
            </h1>

            {/* meta */}
            <p className="text-xs font-mono mb-4" style={{ color: "var(--text-3)" }}>
              Aug 2026 · ~9 min read · Anurag Singh (Oval17)
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              <Tag>GSoC &apos;26</Tag>
              <Tag>Learning Unlimited</Tag>
              <Tag>ESP-Website</Tag>
              <Tag>Open Source</Tag>
            </div>

            <div style={{ height: "1px", background: "var(--border)" }} className="mb-8" />
          </div>
        </div>

        <article className="pb-10">
          {/* intro */}
          <P>
            Learning Unlimited is a national nonprofit that empowers college students to create
            educational programs for younger learners — student-led events and courses spanning
            everything from rocket science to poetry. Multiple chapters run those programs every
            year on one shared codebase,{" "}
            <PRLink href={REPO}>ESP-Website</PRLink>.
          </P>
          <P>
            My project was the layer underneath the bundled themes — the theming system that
            lets each chapter give its program a distinct look. It was still on Bootstrap 2.3.2,
            a release from 2013, hand-rolled LESS, sprite icons that break on retina displays, and
            enough contrast failures to fail a WCAG audit outright. GSoC &apos;26&apos;s coding
            period runs May 26 through August 23 — I used it to walk that pipeline up to
            Bootstrap 5, migrate the three major themes (droplets, fruitsalad, and bigpicture),
            wire in Bootswatch so chapters get real theme choice out of the box, and not take a
            single live chapter site down doing it.
          </P>

          {/* stat terminal block */}
          <div
            className="rounded-md overflow-hidden my-8"
            style={{
              border: `1px solid ${VIOLET}30`,
              boxShadow: `0 0 24px ${VIOLET}14, inset 0 0 12px ${VIOLET}06`,
              background: "var(--bg)",
            }}
          >
            <div
              className="flex items-center gap-1.5 px-3.5 py-1.5"
              style={{ background: `${VIOLET}12`, borderBottom: `1px solid ${VIOLET}20` }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}40` }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}28` }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}18` }} />
              <span className="ml-auto text-[9px] tracking-[0.12em]" style={{ color: VIOLET, opacity: 0.45 }}>
                stats.json — zsh — 80×24
              </span>
            </div>
            <pre
              className="p-4 text-xs overflow-x-auto"
              style={{ fontFamily: "var(--font-geist-mono)", color: "var(--text-2)", margin: 0, lineHeight: 1.7 }}
            >
{`{
  "org": "learning-unlimited",
  "pull_requests": 46,
  "phases_shipped": 4,
  "bootstrap": "2.3.2 → 5.3.3",
  "pytest_suite": "756+ passing",
  "status": "still shipping"
}`}
            </pre>
          </div>

          {/* PRE-GSOC */}
          <SectionHeading index="01">Before GSoC: earning the keys</SectionHeading>
          <P>
            I started sending PRs to ESP-Website in February, three months before community
            bonding even opened, because a proposal to rebuild someone else&apos;s theming
            pipeline is only as convincing as your proof you&apos;ve actually read it. Those{" "}
            <PRLink href={PRE_GSOC_PRS}>29 pull requests</PRLink> before Phase 1 were a grab-bag —
            closing WCAG label gaps on the Custom Form Creation page, adding pytest-django and
            pytest-xdist so the suite could run in parallel, fixing a theme-editor crash on
            nested image directories, decoding a stray LaTeX byte-string bug, tightening
            registration form validation — and the one that mattered most,{" "}
            <PRLink href={pr(4209)}>upgrading Knockout.js 2.3.0 → 3.5.1 and Select2 3.4.3 → 4.1.0</PRLink>
            {" "}for student class registration, the two packages that power that flow. Beyond
            authoring, I also reviewed 50+ PRs across different domains of the codebase. By the
            time my proposal was due, I wasn&apos;t guessing at it anymore.
          </P>

          {/* GSOC PERIOD */}
          <SectionHeading index="02">The coding period: four phases, one migration</SectionHeading>
          <P>
            My mentors were clear early on: this had to be sequential. Bootstrap 2 straight to 5
            in one PR would be an untestable diff, and a live chapter site needs to be able to
            deploy at any point in the migration — not just at the end. So the coding period
            split into four PRs, each one a full major-version jump, each one merged and green on
            the pytest suite before the next began.
          </P>

          <Phase n="Phase 01" title="Bootstrap 2 → 3" prNum={5806} merged="early June" stats="117 files · +634 / −7,920">
            The least glamorous, most necessary phase. I pulled 42 committed Bootstrap 2 LESS
            files out of the repo, replaced them with npm-managed Bootstrap 3.3.7 and Bootswatch
            3.4.1, and ported 3 of the six bundled themes — droplets, fruitsalad, and barebones —
            plus every shared template to BS3 markup. <code>.span8</code>{" "}
            became <code>.col-md-8</code>, <code>.navbar-inner</code> disappeared,{" "}
            <code>.icon-*</code> sprites gave way to a real icon font. Most of that diff is
            deletion, which is usually the sign a migration is going well.
          </Phase>

          <Phase n="Phase 02" title="Bootstrap 3 → 4, LESS → SCSS" prNum={5816} merged="mid-June" stats="143 files · +4,868 / −674">
            The single biggest change in the project, because Bootstrap 4 was the release that
            dropped LESS entirely in favor of SCSS. I built a dual compile pipeline into{" "}
            <code>ThemeController</code> — <code>has_scss()</code>, <code>compile_scss()</code>,{" "}
            <code>uses_scss_pipeline()</code> — so themes could move to SCSS one at a time
            without the ones that hadn&apos;t migrated yet breaking. A small follow-up,{" "}
            <PRLink href={pr(5828)}>#5828</PRLink>, fixed a crash in{" "}
            <code>/themes/customise</code> for the droplets theme that this phase surfaced.
          </Phase>

          <Phase n="Phase 03" title="Bootstrap 4 → 5, Bootstrap Icons, WCAG AA" prNum={5817} merged="mid-July" stats="57 files · +1,063 / −426">
            Finished the version climb, replaced the last sprite-based Glyphicons with Bootstrap
            Icons, and — the part chapters will actually notice — added a Bootswatch theme
            selector to the theme editor, so an admin can pick Cerulean, Flatly, Darkly, or Lux
            as a real starting point instead of hand-tuning LESS variables from zero. This is
            also where the accessibility pass landed: contrast ratios, <code>aria-label</code>s
            on icon-only buttons, and properly associated <code>&lt;label&gt;</code> elements
            across registration and admin forms, all against WCAG 2.1 AA.
          </Phase>

          <Phase n="Phase 04" title="Per-variable overrides on Bootswatch" prNum={5862} merged="end of July" stats="12 files · +950 / −171">
            The phase that made Phase 3 actually usable day to day. Picking a Bootswatch theme is
            nice, but chapters used to be able to tune individual colors, and Bootswatch on its
            own is all-or-nothing. This layers per-variable customization on top of whatever
            Bootswatch theme is active, so a chapter can start from Flatly and still nudge just
            the primary color without forking the whole theme.
          </Phase>

          <P>
            Threaded through all four phases: a pytest suite of 756+ tests that had to stay green
            at every merge, and — because apparently once you&apos;re in <code>controllers.py</code>{" "}
            every week, people notice — a side quest shipping{" "}
            <PRLink href={pr(5865)}>recurring class scheduling</PRLink> for the AJAX scheduler,
            closing three long-open issues along the way. Thanks to Katherine Brumberg and Will
            Gearty for mentoring through all of it.
          </P>

          {/* POST-GSOC */}
          <SectionHeading index="03">After the four phases: owning it</SectionHeading>
          <P>
            Bootstrap 5 merging doesn&apos;t mean the theming system is finished — it means the
            part nobody claps for starts. Past the four core phases, I&apos;ve got{" "}
            <PRLink href={CURRENT_PRS}>eleven PRs</PRLink> open right now: ten adding unit test
            coverage to modules that had none —{" "}
            <code>ListGenModule</code>, <code>GroupTextModule</code>,{" "}
            <code>TeacherModeratorModule</code>, <code>StudentJunctionAppModule</code>,{" "}
            <code>OnSiteCheckoutModule</code>, <code>DeactivationModule</code>,{" "}
            <code>OnSiteRegister</code>, <code>TeacherOnsite</code>, <code>SurveyManagement</code>
            , <code>VolunteerManage</code> — and one, <PRLink href={pr(5936)}>#5936</PRLink>,
            removing the legacy LESS pipeline outright, because <code>main</code> has been
            Bootstrap-5-only for weeks and the dead LESS branch was still quietly breaking{" "}
            <code>manage.py update</code> whenever theme recompilation fell through to it.
          </P>
          <P>
            That&apos;s the plan going forward: stay on as a maintainer for the theming system,
            not a summer contributor to it. I want to get properly involved in how ESP-Website
            actually cuts and ships releases, not just merge code into it, and push on follow-ups
            like a live theme preview in the editor and an automated accessibility check in CI.
            Learning Unlimited is genuinely useful software — chapters have reached over 50,000
            students since 2007. This was never meant to be a one-summer thing.
          </P>

          <div style={{ height: "1px", background: "var(--border)" }} className="my-8" />

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}
          >
            Everything above links straight to the PRs — dig in on{" "}
            <PRLink href="https://github.com/Oval17">GitHub</PRLink> if you want the diffs. More
            soon.
          </p>
        </article>
      </main>
      <div className="relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.12)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-2xl mx-auto px-6">
          <Footer />
        </div>
      </div>
    </>
  );
}
